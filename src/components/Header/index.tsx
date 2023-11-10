import { MdSearch } from 'react-icons/md';
import logo from '../../assets/logo-dio.png';
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
import { IHeader } from './types';

const Header = ({ authenticated }:IHeader) => {
  return (
    <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da Dio" />
            {authenticated ? (
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
            {authenticated ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/104178969?s=96&v=4" />
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
