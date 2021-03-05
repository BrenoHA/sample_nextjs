import { useEffect, useState } from 'react';
import AddButton from '../AddButton';
import styles from './styles.module.scss';
import { Card } from 'react-bootstrap';
import InputComponent from '../Input';
import { IUser } from '@app/interfaces/user';

const ViewComponent = () => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<IUser>({ name: '' });

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
      <Card>
        <InputComponent setUsername={setUsername} />

        <Card.Body className={styles.name}>
          {user.name && (
            <span>
              Hello <strong>{user.name}</strong> 😃
            </span>
          )}
          <AddButton />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewComponent;
