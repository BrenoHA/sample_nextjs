import ViewComponent from '@app/components/View';
import { IUser } from '@app/interfaces/user';

type Props = {
  user: IUser;
};

const HomePage = ({ user }: Props) => {
  return (
    <div>
      <ViewComponent name={user.name} />;
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/BrenoHA`);
  const user: IUser = await res.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
}

export default HomePage;
