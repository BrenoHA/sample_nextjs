import styles from './styles.module.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { SyntheticEvent, ChangeEvent, useState } from 'react';

type Props = {
  setUsername: (name: string) => void;
  avatar_url: string;
};

const InputComponent = ({ setUsername, avatar_url }: Props) => {
  const [name, setName] = useState<string>('');
  const [hasProfilePic, setHasProfilePic] = useState(false);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    setUsername(name);
    setHasProfilePic(true);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setName(ev.target.value);
  };

  console.log(avatar_url); //Undefined

  return (
    <div className={styles.container}>
      {hasProfilePic ? (
        <img src={avatar_url} alt="profile" />
      ) : (
        <img src="github.png" alt="github-logo" />
      )}
      <span className={styles.label}>Digite seu usuário do GitHub</span>

      <form onSubmit={handleSubmit} className={styles.container}>
        <InputGroup className="mb-3" onChange={handleChange}>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Button type="submit" variant="outline-primary">
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default InputComponent;
