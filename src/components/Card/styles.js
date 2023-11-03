import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
  object-fit: fill;
  object-position: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: 'Open Sans';
    color: white;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1px;
    font-weight: 700;
    font-style: normal;
  }

  p {
    font-family: 'Open Sans';
    color: white;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    font-style: normal;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #fafafa;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: 'Open Sans';
    color: white;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1px;
    font-weight: 700;
    font-style: normal;
  }

  p {
    font-family: 'Open Sans';
    color: white;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    font-weight: 400;
    font-style: normal;
  }
`;

export const HasInfo = styled.div`
  margin-top: 12px;

  h4 {
    font-family: 'Open Sans';
    color: #ffffff80;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    font-weight: 700;
    font-style: normal;
  }

  p {
    font-family: 'Open Sans';
    color: white;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.2px;
    font-weight: 400;
    font-style: normal;
  }
`;
