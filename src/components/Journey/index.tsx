import { SyntheticEvent, ChangeEvent, useState } from 'react';
import { Button, Modal, Row, Col, Form, Card } from 'react-bootstrap';
import styles from './styles.module.scss';
import { JourneyStoreClass } from '@app/stores/JourneyStore';
import { observer } from 'mobx-react';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
};

const JourneyComponent = observer(({ journeyStore }: JourneyListProps) => {
  const [type, setType] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const status = journeyStore.status;

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (startTime) {
      journeyStore.addJourney(type, startTime, endTime);
      setStartTime('');
    }
  };

  const handleStartTimeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setStartTime(ev.target.value);
  };
  const handleTypeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setType(ev.target.value);
  };
  const handleEndTimeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setEndTime(ev.target.value);
  };

  return (
    <>
      <div className={styles.center}>
        <div className={styles.container}>
          <span>Adicione uma jornada</span>
          <Button
            onClick={handleShow}
            variant="outline-primary"
            className="mt-2"
          >
            Adicionar
          </Button>

          <span>Feitos: {status.completed} </span>
          <span> Remanecentes: {status.remaining}</span>
        </div>

        <div className="d-flex justify-content-start mt-4 ">
          <div>
            {journeyStore.journeys.map((journey, index) => {
              return (
                <Card
                  className="my-2"
                  border="secondary"
                  style={{ width: '18rem' }}
                  key={index}
                >
                  <Card.Header>{journey.type}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Início: {journey.startTime}
                      <br />
                      Fim: {journey.endTime}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Modal size="lg" show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nova Jornada</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="tipo"
                  onChange={handleTypeChange}
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
                  onChange={handleStartTimeChange}
                />
              </Col>
              <Col>
                <Form.Label>Fim</Form.Label>
                <Form.Control
                  type="datetime-local"
                  aria-label="EndTime"
                  onChange={handleEndTimeChange}
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Salvar Jornada
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
});

export default JourneyComponent;
