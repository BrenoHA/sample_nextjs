import styles from './styles.module.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { SyntheticEvent, ChangeEvent, useState } from 'react';

type Props = {
  setIsInfo: (isCounter: boolean) => void;
  setUsername: (username: string) => void;
};

const InputComponent = ({ setIsInfo, setUsername }: Props) => {
  const [tempUsername, setTempUsername] = useState<string>('');

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (tempUsername.length > 0) {
      setIsInfo(true);
      setUsername(tempUsername);
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setTempUsername(ev.target.value);
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
            required
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
