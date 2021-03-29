import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
//
import Cookie from 'js-cookie';
import { addMinutes } from 'date-fns';
//
import styles from './styles.module.scss';

const LoginComponent = () => {
  const [status, setStatus] = useState<string>('Deslogado');

  useEffect(() => {
    setStatus(checkStatus());
  }, [status]);

  const checkStatus = () => {
    if (Boolean(Cookie.get('token')) === false) {
      return 'Deslogado';
    } else {
      return 'Logado';
    }
  };

  const logar = () => {
    Cookie.set('token', 'custom-token-here', {
      expires: addMinutes(new Date(), 2), //expira em 2 minutos
    });
    setStatus(checkStatus());
  };

  const sair = () => {
    Cookie.remove('token');
    setStatus(checkStatus());
  };

  return (
    <div className={styles.container}>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className={styles.title}>Login</Card.Title>
          <Card.Text>
            Aperte em login para enviar o token de autenticação e testar em cada
            uma das páginas "Private" abaixo.
          </Card.Text>
          <Card.Text>
            Você está atualmente: <strong>{status}</strong>
          </Card.Text>
          <div className="d-flex flex-column">
            <Link href="/login/private-client">Private Cliente</Link>
            <Link href="/login/private-ssr">Private SSR</Link>
          </div>
          <div className="d-flex justify-content-around mt-5">
            <Button variant="primary" onClick={logar}>
              Logar
            </Button>
            <Button variant="outline-danger" onClick={sair}>
              Sair
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginComponent;
