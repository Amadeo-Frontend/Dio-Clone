import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { InferType } from 'yup';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input/input';
import { AuthContext } from '../../context/auth';
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

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const senhaRegex = /^.{4,}$/;

// Defina o esquema de validação
const schema = yup.object({
  email: yup
    .string()
    .matches(emailRegex, 'Email não é válido')
    .required('Insira seu email'),
  password: yup
    .string()
    .matches(senhaRegex, 'A senha deve ter no mínimo 4 caracteres')
    .required('Insira sua senha'),
});

// Infira a forma dos dados do formulário a partir do esquema
type FormData = InferType<typeof schema>;

// Infira o tipo para o componente Login
const Login: React.FC = () => {
  const {handleLogin} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (formData: FormData) => {
    handleLogin(formData);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <Link to="/register">
                <CriarText>Criar conta</CriarText>
              </Link>
            </Row>
          </Wrapper>
        </div>
      </Container>
    </>
  );
};

export default Login;
