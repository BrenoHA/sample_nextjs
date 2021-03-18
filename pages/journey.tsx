import JourneyComponent from '@app/components/Journey';
import { JourneyStore } from '@app/stores/JourneyStore';

const JourneyPage = () => {
  return (
    <>
      <JourneyComponent journeyStore={JourneyStore} />
    </>
  );
};

export default JourneyPage;
