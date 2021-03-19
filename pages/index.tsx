import CardInfoComponent from '@app/components/CardInfo';
import CardInputComponent from '@app/components/CardInput';
import { useEffect, useState } from 'react';

type IUser = {
  name: string;
  avatar_url: string;
};

const HomePage = () => {
  const [isInfo, setIsInfo] = useState<boolean>(false);
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
      {isInfo ? (
        <CardInfoComponent setIsInfo={setIsInfo} user={user} />
      ) : (
        <CardInputComponent setIsInfo={setIsInfo} setUsername={setUsername} />
      )}
    </>
  );
};

export default HomePage;
