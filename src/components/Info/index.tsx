import styles from './styles.module.scss';

type InputProps = {
  name: string;
  avatar_url: string;
};

const InfoComponent = ({ name, avatar_url }: InputProps) => {
  return (
    <div className={styles.info}>
      <img src={avatar_url} alt="Foto Perfil" />
      <span>
        Hello <strong>{name}</strong>
      </span>
    </div>
  );
};

export default InfoComponent;
