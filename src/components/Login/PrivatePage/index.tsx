import Link from 'next/link';
import { Card } from 'react-bootstrap';

import styles from './styles.module.scss';

const PrivateComponent = () => {
  return (
    <div className={styles.container}>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className={styles.title}>Página Privada</Card.Title>
          <Card.Text>Esta é uma página privada scom autenticação</Card.Text>
          <Link href="/login" passHref>
            Voltar
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrivateComponent;
