import CardCounterComponent from '@app/components/CardCounter';
import CardInputComponent from '@app/components/CardInput';
import { useEffect, useState } from 'react';

type IUser = {
  name: string;
  avatar_url: string;
};

const HomePage = () => {
  const [isCounter, setIsCounter] = useState<boolean>(false);
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
    <>
      {isCounter ? (
        <CardCounterComponent setIsCounter={setIsCounter} user={user} />
      ) : (
        <CardInputComponent
          setIsCounter={setIsCounter}
          setUsername={setUsername}
        />
      )}
    </>
  );
};

export default HomePage;
