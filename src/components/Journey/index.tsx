import { SyntheticEvent, ChangeEvent, useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import { JourneyStoreClass } from './JourneyStore';
import { observer } from 'mobx-react';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
};

const JourneyComponent = observer(({ journeyStore }: JourneyListProps) => {
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const status = journeyStore.status;

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (value) {
      journeyStore.addJourney(value);
      setValue('');
    }
    console.log(value);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setValue(ev.target.value);
  };

  return (
    <>
      <div className={styles.center}>
        <div>
          <div className="d-flex flex-column mb-3">
            <span>Adicione uma jornada</span>
            <Button
              onClick={handleShow}
              variant="outline-primary"
              className="mt-2"
            >
              Adicionar
            </Button>
          </div>

          <div className="d-flex justify-content-start flex-column mt-2 ">
            <span>Feitos: {status.completed} </span>
            <span> Remanecentes: {status.remaining}</span>
          </div>

          <div className="d-flex justify-content-start mt-4">
            <ul>
              {journeyStore.journeys.map((journey, index) => {
                return (
                  <li
                    onClick={() => {
                      journeyStore.setCompleted(journey.id);
                    }}
                    key={index}
                  >
                    [ {journey.completed ? 'x' : '\xa0\xa0'} ]{journey.name}
                  </li>
                );
              })}
            </ul>
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
                <Form.Control as="select" aria-label="tipo">
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
                  aria-label="inicio"
                  value={value}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Fim</Form.Label>
                <Form.Control type="datetime-local" aria-label="Tarefa" />
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
