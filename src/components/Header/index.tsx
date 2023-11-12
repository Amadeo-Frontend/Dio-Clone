import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { UserPicture } from '../Card/styles';
import {
  BuscarInput,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from './styles';

const Header = () => {
  const {user , handleSingOut} = useAuth();
  return (
    <Wrapper>
        <Container>
          <Row>
            <Link to='/'><img src={logo} alt="Logo da Dio" /></Link>
            {user.id ? (
              <>
                <BuscarInput>
                  <Input placeholder="BUSCAR" leftIcon={<MdSearch />} />
                </BuscarInput>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {user.id ? (
              <>
              <UserPicture src="https://avatars.githubusercontent.com/u/104178969?s=96&v=4" />{" "}
              <a href='#' onClick={handleSingOut}>Sair</a>
              </>
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Link to='/login'><Button title="Entrar" /></Link>
                <Link to='/register'><Button title="Cadastrar" /></Link>
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
  );
};
export { Header };
