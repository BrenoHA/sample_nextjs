import { motion } from 'framer-motion';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Modal, Card, ListGroup } from 'react-bootstrap';

import { JourneyStoreClass } from '@app/stores/JourneyStore';
import ModalJourneyComponent from './Modal';

import styles from './styles.module.scss';
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

  const time = duration_ms / 1000,
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60;

  const duration_time = `${hours}h ${minutes}min`;

  return duration_time;
};

const JourneyComponent = observer(({ journeyStore }: JourneyListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const status = journeyStore.status;

  return (
    <motion.div
      initial="pageInitial"
      animate="pageVisible"
      transition={{ duration: 0.5 }}
      variants={{
        pageInitial: {
          opacity: 0,
          scale: 0,
        },
        pageVisible: {
          scale: 1,
          opacity: 1,
        },
      }}
    >
      <div className={styles.center}>
        <div className={styles.container}>
          <span>Adicione um Evento</span>
          <Button
            onClick={handleShow}
            variant="outline-primary"
            className="my-2"
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
        <div className="d-flex justify-content-start mt-3 mb-4 ">
          <div className="mb-5">
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
    </motion.div>
  );
});
export default JourneyComponent;
