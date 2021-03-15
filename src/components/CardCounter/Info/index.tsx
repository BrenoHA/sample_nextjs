import styles from './styles.module.scss';

type Props = {
  name: string;
  avatar_url: string;
};

const InfoComponent = ({ name, avatar_url }: Props) => {
  return (
    <div className={styles.info}>
      <img src={avatar_url} alt="Foto Perfil" />
      <span className={styles.name}>
        Hello <strong>{name}</strong>
      </span>
    </div>
  );
};

export default InfoComponent;
