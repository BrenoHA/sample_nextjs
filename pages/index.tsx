import CardCounterComponent from '@app/components/CardCounter';
import CardInput from '@app/components/CardInput';
import { useState } from 'react';

const HomePage = () => {
  const [isCounter, setIsCounter] = useState<boolean>(false);

  return (
    <div>
      {isCounter ? (
        <CardCounterComponent setIsCounter={setIsCounter} />
      ) : (
        <CardInput setIsCounter={setIsCounter} />
      )}
    </div>
  );
};

export default HomePage;
