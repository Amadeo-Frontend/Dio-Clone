import { Controller } from 'react-hook-form';
import {
  ErrorContainer,
  ErrorText,
  IconContainer,
  InputContainer,
  InputText,
} from './styles';
import { IInput } from './types';

const Input = ({ leftIcon, name, control, errorMessage, ...rest }:IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      <ErrorContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </ErrorContainer>
    </>
  );
};

export { Input };
