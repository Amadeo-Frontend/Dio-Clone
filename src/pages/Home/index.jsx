import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Link to="/login">Fazer login</Link>
      </div>
    </>
  );
};

export { Home };
