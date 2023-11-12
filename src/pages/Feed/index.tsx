import { useContext } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';
import { AuthContext } from '../../context/auth';
import { Column, Container, TitleHighLigth, TitleUser } from './styles';

const Feed = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <TitleUser>{user.name}</TitleUser>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLigth># RANKING TOP 5 DA SEMANA</TitleHighLigth>
          <UserInfo
            percentual={100}
            name="Amadeo Bon"
            image="https://avatars.githubusercontent.com/u/104178969?s=96&v=4"
          />{' '}
          <UserInfo
            percentual={90}
            name="Jorge das Flores"
            image="https://avatars.githubusercontent.com/u/104178969?s=96&v=4"
          />{' '}
          <UserInfo
            percentual={75}
            name="Henrique Novais"
            image="https://avatars.githubusercontent.com/u/104178969?s=96&v=4"
          />
          <UserInfo
            percentual={60}
            name="Clara Aparecida"
            image="https://avatars.githubusercontent.com/u/104178969?s=96&v=4"
          />
          <UserInfo
            percentual={45}
            name="John Doe"
            image="https://avatars.githubusercontent.com/u/104178969?s=96&v=4"
          />{' '}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
