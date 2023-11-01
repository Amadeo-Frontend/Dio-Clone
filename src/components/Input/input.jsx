import { IconContainer, InputContainer, InputText } from './styles';

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };
