import JourneyComponent from '@app/components/Journey';
import { JourneyStore } from '@app/stores/JourneyStore';
import NavBarComponent from '@app/components/NavBar';

const JourneyPage = () => {
  return (
    <>
      <NavBarComponent />
      <JourneyComponent journeyStore={JourneyStore} />
    </>
  );
};

export default JourneyPage;
