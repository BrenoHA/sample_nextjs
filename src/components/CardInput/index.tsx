import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import InputComponent from './Input';

import styles from './styles.module.scss';

type Props = {
  setIsInfo: (isInfo: boolean) => void;
  setUsername: (username: string) => void;
};

const CardInputComponent = ({ setIsInfo, setUsername }: Props) => {
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
          <InputComponent setIsInfo={setIsInfo} setUsername={setUsername} />
        </Card>
      </div>
    </motion.div>
  );
};

export default CardInputComponent;
