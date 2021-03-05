import styles from './styles.module.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { SyntheticEvent, ChangeEvent, useState } from 'react';

type Props = {
  setUsername: (name: string) => void;
};

const InputComponent = ({ setUsername }: Props) => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    setUsername(name);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setName(ev.target.value);
  };

  return (
    <div className={styles.container}>
      <img src="github.png" alt="github-logo" />

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
