import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import CounterComponent from '../Counter';
import { Card } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';

import { IUser } from '@app/interfaces/user';
import InfoComponent from '../Info';

type Props = {
  setIsCounter: (isCounter: boolean) => void;
};

const CardCounterComponent = ({ setIsCounter }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<IUser>({ name: '', avatar_url: '' });

  useEffect(() => {
    if (username != '') {
      const getUser = async () => {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const user: IUser = await res.json();

        if (user) {
          setUser(user);
        }
      };

      getUser();
    }
  }, [username]);

  return (
    <div className={styles.center}>
      <Card style={{ width: '20rem' }}>
        <FiArrowLeft
          size="25"
          className={styles.link}
          onClick={() => setIsCounter(false)}
        />
        <Card.Body>
          <InfoComponent
            name={username}
            avatar_url={'https://avatars.githubusercontent.com/u/45776777?v=4'}
          />
          <CounterComponent />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCounterComponent;
