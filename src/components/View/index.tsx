import AddButton from '../AddButton';
import styles from './styles.module.scss';
import { Card } from 'react-bootstrap';

type Props = {
  name: string;
};

const ViewComponent = ({ name }: Props) => {
  return (
    <div className={styles.center}>
      <Card>
        <Card.Body>
          {/* <div> */}
          <span>Hello {name}</span>
          {/* </div>; */}
          {/* <div> */}
          <AddButton />
          {/* </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewComponent;
