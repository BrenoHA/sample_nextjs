import { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
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
                      Início: {formatDate(journey.startTime)}
                      <br />
                      Fim: {formatDate(journey.endTime)}
                    </Card.Text>
                  </Card.Body>
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
