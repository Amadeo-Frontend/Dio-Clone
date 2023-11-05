import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input/input';
import {
  Column,
  Container,
  CustomButton,
  LoginSubtitleRegister,
  LoginText,
  PrivacyRegister,
  Row,
  SubtitleRegister,
  TextRegister,
  TitleRegister,
  Wrapper,
} from './styles';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const senhaRegex = /^.{4,}$/;

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
const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = async (data) => {
    try {
      // Fazer uma solicitação POST para a sua API local para criar um usuário
      const response = await axios.post('http://localhost:8001/api/users', {
        name: data.name,
        email: data.email,
        senha: data.password,
      });

      // Verifique se o registro foi bem-sucedido (assumindo que a API retorna um status 201 para criação bem-sucedida)
      if (response.status === 201) {
        // Redirecione o usuário para a página de login após o registro bem-sucedido
        navigate('/login');
      } else {
        // Lidar com erros, como exibir uma mensagem de erro ao usuário
        console.error('Erro no registro:', response.data);
      }
    } catch (error) {
      // Lidar com erros, como exibir uma mensagem de erro ao usuário
      console.error('Erro ao criar a conta:', error);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <TextRegister>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </TextRegister>
        </Column>
        <div>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                placeholder="Nome completo"
                control={control}
                type="text"
                leftIcon={<MdAccountCircle />}
              />
              <Input
                name="email"
                placeholder="Email"
                control={control}
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                placeholder="Senha"
                control={control}
                type="password"
                leftIcon={<MdLock />}
              />
              <CustomButton
                title="Criar minha conta"
                variant="secundary"
                type="submit"
              />
            </form>
            <div>
              <PrivacyRegister>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </PrivacyRegister>
              <Row>
                <LoginSubtitleRegister>
                  Já tenho conta.
                  <Link to="/login">
                    <LoginText>Fazer login</LoginText>
                  </Link>
                </LoginSubtitleRegister>
              </Row>
            </div>
          </Wrapper>
        </div>
      </Container>
    </>
  );
};
export { Register };
