import { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';
import { AuthContext } from '../../context/auth';
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
  const {user , handleSingOut} = useContext(AuthContext);
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
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
  );
};
export { Header };
