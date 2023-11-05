import styled from 'styled-components';
import { Button } from '../../components/Button';

export const Container = styled.main`
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  flex: 0;
`;

export const TextRegister = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  width: 390px;
  margin-bottom: 328px;
  color: #fff;
  word-wrap: 'break-word';
`;

export const TitleRegister = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  width: 370px;
  margin-bottom: 8px;
  color: #fff;
  word-wrap: 'break-word';
`;

export const SubtitleRegister = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
  width: 100%;
`;

export const PrivacyRegister = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 27px;
`;

export const LoginSubtitleRegister = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 175px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const LoginText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    opacity: 0.6;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const CustomButton = styled(Button)`
  margin-top: 30px;
`;
