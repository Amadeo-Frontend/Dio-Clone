import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input/input';
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';
const Login = () => {
  const navigate = useNavigate();

  const handleClickFeed = () => {
    navigate('/feed');
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <div>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form>
              <Input
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
                required
              />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                required
              />
              <Button
                title="Entrar"
                variant="secundary"
                onClick={handleClickFeed}
                type="button"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </div>
      </Container>
    </>
  );
};

export default Login;
