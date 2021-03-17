import { useState } from 'react';

import styles from './styles.module.scss';
import CounterComponent from './Counter';
import { Card } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';

import { IUser } from '@app/interfaces/user';
import InfoComponent from './Info';

type Props = {
  setIsCounter: (isCounter: boolean) => void;
  user: IUser;
};

const CardCounterComponent = ({ setIsCounter, user }: Props) => {
  return (
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
  );
};

export default CardCounterComponent;
