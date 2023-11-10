import { ButtonContainer } from './styles';
import { Ibutton } from './types';



const Button = ({
  title,
  variant = 'primary',
  onClick,
  className,
}: Ibutton) => {
  return (
    <ButtonContainer className={className} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
