import { SyntheticEvent, ChangeEvent, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { JourneyStoreClass } from './JourneyStore';
import { observer } from 'mobx-react';

type JourneyListProps = {
  journeyStore: JourneyStoreClass;
};

const JourneyComponent = observer(({ journeyStore }: JourneyListProps) => {
  const [value, setValue] = useState('');

  const status = journeyStore.status;

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    if (value) {
      journeyStore.addJourney(value);
      setValue('');
    }
    console.log(value);
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setValue(ev.target.value);
  };

  return (
    <div className={styles.center}>
      <div>
        <span>Digite uma jornada</span>
        <form onSubmit={handleSubmit} className="d-flex flex-row mt-2">
          <FormControl
            type="datetime-local"
            placeholder=""
            aria-label="Tarefa"
            aria-describedby="basic-addon1"
            value={value}
            onChange={handleChange}
            className="mr-2"
          />

          <Button type="submit" variant="outline-primary">
            Adicionar
          </Button>
        </form>
      </div>

      <div>
        <span>Feitos: {status.completed} </span>
        <br />
        <span> Remanecentes: {status.remaining}</span>
      </div>

      <div>
        <ul>
          {journeyStore.journeys.map((journey, index) => {
            return (
              <li
                onClick={() => {
                  journeyStore.setCompleted(journey.id);
                }}
                key={index}
              >
                [ {journey.completed ? 'x' : ' '} ]{journey.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default JourneyComponent;
