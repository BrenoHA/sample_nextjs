import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

import InfoComponent from './Info';
import CounterComponent from './Counter';
import { IUser } from '@app/interfaces/user';

import styles from './styles.module.scss';

type Props = {
  setIsCounter: (isCounter: boolean) => void;
  user: IUser;
};

const CardCounterComponent = ({ setIsCounter, user }: Props) => {
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
        <Card style={{ width: '20rem' }}>
          <FiArrowLeft
            size="25"
            className={styles.link}
            onClick={() => setIsCounter(false)}
          />
          <Card.Body>
            <InfoComponent name={user.name} avatar_url={user.avatar_url} />
            <CounterComponent />
          </Card.Body>
        </Card>
      </div>
    </motion.div>
  );
};

export default CardCounterComponent;
