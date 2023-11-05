import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer;

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      min-width: 167px;
      background-color: #e4105d;

      &:hover {
        background-color: #ff007f;
        box-shadow: 0 0 20px #ff007f;
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
        cursor: pointer;

        &:hover {
          border-color: #ff007f; /* Mude a cor da borda no hover */
        }
      }
    `}
`;
