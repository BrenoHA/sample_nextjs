import { SyntheticEvent, ChangeEvent, useState } from 'react';
import { Button, Modal, Row, Col, Form, Card } from 'react-bootstrap';
import styles from './styles.module.scss';
import { JourneyStoreClass } from '@app/stores/JourneyStore';
import { observer } from 'mobx-react';
import ModalJourneyComponent from './Modal';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
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
    </>
  );
});
export default JourneyComponent;
