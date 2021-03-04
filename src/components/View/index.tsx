import AddButton from '../AddButton';
import styles from './styles.module.css';

type Props = {
  name: string;
};

const ViewComponent = ({ name }: Props) => {
  return (
    <div className={styles.center}>
      <div>
        <span>Hello {name}</span>
      </div>
      <div>
        <AddButton />
      </div>
    </div>
  );
};

export default ViewComponent;
