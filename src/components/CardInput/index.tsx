import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Card } from 'react-bootstrap';
import InputComponent from '../Input';
import { IUser } from '@app/interfaces/user';

type Props = {
  setIsCounter: (isCounter: boolean) => void;
};

const CardInputComponent = ({ setIsCounter }: Props) => {
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
        <InputComponent setIsCounter={setIsCounter} />
      </Card>
    </div>
  );
};

export default CardInputComponent;
