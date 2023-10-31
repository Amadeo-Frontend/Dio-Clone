import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
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
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da Dio" />
            <Button title="Entrar" />
            <Button title="Cadastrar" />
          </Row>
          <Row>
            <MenuRight href="#">Home</MenuRight>
            <BuscarInput>
              <Input />
            </BuscarInput>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};
export { Header };
