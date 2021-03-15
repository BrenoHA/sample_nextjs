import { useState } from 'react';
import { Button, Modal, Card, ListGroup } from 'react-bootstrap';
import styles from './styles.module.scss';
import { JourneyStoreClass } from '@app/stores/JourneyStore';
import { observer } from 'mobx-react';
import ModalJourneyComponent from './Modal';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
};

const formatDate = (date: string) => {
  const d = new Date(date);
  const date_formated = d.toLocaleTimeString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return date_formated;
};

const getDurationTime = (startTime: string, endTime: string) => {
  const formated_startTime = +new Date(startTime);
  const formated_endTime = +new Date(endTime);
  const duration_ms = formated_endTime - formated_startTime;

  const date_duration_ms = new Date(duration_ms);
  const duration_time = `${date_duration_ms.getHours()}h ${date_duration_ms.getMinutes()}min`;
  return duration_time;
};

const JourneyComponent = observer(({ journeyStore }: JourneyListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const status = journeyStore.status;

  return (
    <>
      <div className={styles.center}>
        <div className={styles.container}>
          <span>Adicione um Evento</span>
          <Button
            onClick={handleShow}
            variant="outline-primary"
            className="mt-2"
          >
            Adicionar
          </Button>
          <Modal size="lg" show={showModal} onHide={handleClose} centered>
            <ModalJourneyComponent
              journeyStore={journeyStore}
              setShowModal={setShowModal}
            />
          </Modal>
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
                  <Card.Header
                    onClick={() => {
                      journeyStore.setCompleted(journey.id);
                    }}
                  >
                    [ {journey.completed ? 'x' : '\xa0\xa0'} ] {journey.type}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>Início: </strong>
                      {formatDate(journey.startTime)}
                      <br />
                      <strong>Fim: </strong>
                      {formatDate(journey.endTime)}
                      <br />
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <strong>Duração: </strong>
                      {getDurationTime(journey.startTime, journey.endTime)}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
export default JourneyComponent;
