import { SyntheticEvent, useState } from 'react';
import { Button, Modal, Row, Col, Form, Card } from 'react-bootstrap';

import { JourneyStoreClass } from '@app/stores/JourneyStore';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
  setShowModal: (showModal: boolean) => void;
};

const ModalJourneyComponent = ({
  journeyStore,
  setShowModal,
}: JourneyListProps) => {
  const [type, setType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (startTime) {
      journeyStore.addJourney(type, startTime, endTime);
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
                value={startTime}
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
                onChange={(ev) => {
                  setEndTime(ev.target.value);
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Salvar Evento
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default ModalJourneyComponent;
