import { FiThumbsUp } from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://media.licdn.com/dms/image/D4D16AQHnDtLiWZkRkg/profile-displaybackgroundimage-shrink_350_1400/0/1680925061428?e=1704326400&v=beta&t=vH4ULqoM5zl-ODcfAfZBRrX6JPgKiZLNe63Zk8Ko138" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/104178969?s=96&v=4" />
          <div>
            <h4>Amadeo</h4>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
              eros commodo tempor.
            </p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto par curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp Dio do global
            avanade...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JS</h4>
          <p>{<FiThumbsUp />} 10</p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
