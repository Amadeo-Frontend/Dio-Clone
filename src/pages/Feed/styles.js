import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
  color: #fff;
`;

export const TitleHighLigth = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
  color: #ffffff70;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;
