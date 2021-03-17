import { SyntheticEvent, useState } from 'react';
import { Button, Modal, Row, Col, Form, InputGroup } from 'react-bootstrap';

import { JourneyStoreClass } from '@app/stores/JourneyStore';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
  setShowModal: (showModal: boolean) => void;
};

const ModalJourneyComponent = ({
  journeyStore,
  setShowModal,
}: JourneyListProps) => {
  const [type, setType] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [showDateError, setShowDateError] = useState<boolean>(false);

  const validateDate = (startTime: string, endTime: string) => {
    const formated_startTime = new Date(startTime);
    const formated_endTime = new Date(endTime);

    const isAfter = formated_endTime > formated_startTime;

    const isValid = isAfter;

    return isValid;
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (validateDate(startTime, endTime)) {
      journeyStore.addJourney(type, startTime, endTime);
      handleClose();
    } else {
      setShowDateError(true);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                aria-label="tipo"
                onChange={(ev) => {
                  setType(ev.target.value);
                }}
              >
                <option>-</option>
                <option>Descanso</option>
                <option>Espera</option>
                <option>Refeição</option>
                <option>Pernoite</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Início</Form.Label>
              <Form.Control
                type="datetime-local"
                aria-label="StartTime"
                required
                onChange={(ev) => {
                  setStartTime(ev.target.value);
                }}
              />
            </Col>
            <Col>
              <Form.Label>Fim</Form.Label>
              <Form.Control
                type="datetime-local"
                aria-label="EndTime"
                required
                isInvalid={showDateError}
                onChange={(ev) => {
                  setEndTime(ev.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                O Fim deve ser depois do Início.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" type="submit">
            Salvar Evento
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default ModalJourneyComponent;
