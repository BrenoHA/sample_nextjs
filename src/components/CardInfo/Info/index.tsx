import { motion } from 'framer-motion';
import { relative } from 'node:path';

import styles from './styles.module.scss';

type Props = {
  name: string;
  avatar_url: string;
};

const InfoComponent = ({ name, avatar_url }: Props) => {
  return (
    <div className={styles.info}>
      <motion.div
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 2.5,
        }}
      >
        <img src={avatar_url} alt="Foto Perfil" />
      </motion.div>
      <span className={styles.name}>
        Hello <strong>{name}</strong>
      </span>
    </div>
  );
};

export default InfoComponent;
