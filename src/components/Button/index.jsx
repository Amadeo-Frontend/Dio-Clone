import React from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  title: string,
  variant?: 'primary' | 'secondary', // Defina as variantes aceitáveis
  onClick?: () => void,
  className?: string, // Adicione a propriedade className para aceitar classes personalizadas
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  onClick,
  className,
}) => {
  return (
    <ButtonContainer className={className} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
