import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Button, Card } from 'react-bootstrap';

import { IUser } from '@app/interfaces/user';

import styles from './styles.module.scss';

type Props = {
  setIsInfo: (isInfo: boolean) => void;
  user: IUser;
};

const CardInfoComponent = ({ setIsInfo, user }: Props) => {
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
            onClick={() => setIsInfo(false)}
          />
          <Card.Body>
            {/* <InfoComponent name={user.name} avatar_url={user.avatar_url} /> */}
            <motion.div
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.5,
              }}
            >
              <img
                className={styles.avatar}
                src={user.avatar_url}
                alt="Foto Perfil"
              />
            </motion.div>
            <Card.Title>
              Hello <strong>{user.name}</strong>
            </Card.Title>
            <Card.Text>Seja bem vindo!</Card.Text>
            <Button variant="primary" target="_blank" href={user.html_url}>
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>
    </motion.div>
  );
};

export default CardInfoComponent;
