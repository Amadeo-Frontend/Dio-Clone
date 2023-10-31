import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInput = styled.div`
  background-color: #2d2d37;
  width: 275px;
  height: 30px;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.6px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 12px;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.6px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 12px;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 22px;
  border: 2px solid #fff;
`;

export const Input = styled.input`
  background-color: transparent;
  flex: 1;
  outline: none;
  border: none;
  font-family: 'Open Sans';
  font-style: normal;
  color: #fff;
`;
