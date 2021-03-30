import { useEffect, useState } from 'react';
import axios from 'axios';

import CardInfoComponent from '@app/components/CardInfo';
import CardInputComponent from '@app/components/CardInput';

type IUser = {
  name: string;
  avatar_url: string;
  html_url: string;
};

const HomePage = () => {
  const [isInfo, setIsInfo] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<IUser>({
    name: '',
    avatar_url: '',
    html_url: '',
  });

  const userNotFound = () => {
    console.log('error');
  };

  useEffect(() => {
    if (username != '') {
      const getUser = async () => {
        axios
          .get(`https://api.github.com/users/${username}`)
          .then((response) => {
            const user: IUser = response.data;

            if (response.status == 200) {
              setUser(user);
            } else {
            }
          })
          .catch(() => {
            userNotFound();
            setIsInfo(false);
          });
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
