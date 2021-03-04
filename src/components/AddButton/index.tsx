import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const AddButton = () => {
  const [count, setCount] = useState(0);
  const [isActivate, setIsActivate] = useState(false);

  const start = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const getTime = (): string => {
    let data = new Date(0, 0, 0, 0, 0, 0);
    data.setSeconds(count);
    return data.toLocaleTimeString();
  };

  useEffect(() => {
    if (isActivate) {
      const id = setInterval(() => {
        start();
      }, 1000);

      return () => clearInterval(id);
    }
  }, [count, isActivate]);

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <span> {getTime()} </span>
      </div>

      <div>
        <Button variant="primary" onClick={() => setIsActivate(!isActivate)}>
          {isActivate ? 'Pausar' : 'Iniciar'}
        </Button>
        {count > 0 && !isActivate && (
          <Button variant="sencodary" onClick={reset}>
            Resetar
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddButton;
