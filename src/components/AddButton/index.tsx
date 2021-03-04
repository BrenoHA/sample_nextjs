import { useEffect, useState } from 'react';
import styles from './styles.module.css';

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
      <p> {getTime()} </p>
      <div>
        <button onClick={() => setIsActivate(!isActivate)}>
          {isActivate ? 'Pausar' : 'Iniciar'}
        </button>
        {count > 0 && <button onClick={reset}>Resetar</button>}
      </div>
    </div>
  );
};

export default AddButton;
