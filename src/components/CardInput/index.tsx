import { Card } from 'react-bootstrap';

import InputComponent from './Input';

import styles from './styles.module.scss';

type Props = {
  setIsCounter: (isCounter: boolean) => void;
  setUsername: (username: string) => void;
};

const CardInputComponent = ({ setIsCounter, setUsername }: Props) => {
  return (
    <div className={styles.center}>
      <Card style={{ width: '20rem' }}>
        <InputComponent setIsCounter={setIsCounter} setUsername={setUsername} />
      </Card>
    </div>
  );
};

export default CardInputComponent;
