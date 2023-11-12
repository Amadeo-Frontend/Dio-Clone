import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProps, ILoginData } from './types';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProps) => {
  const[user , setUser] = useState<IUser>({} as IUser); 

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&password=${loginData.password}`,
      );
      if (data.length === 1) {
        setUser(data[0]);
        navigate('/feed');
      } else {
        alert('Usuário ou Senha inválidos');
      }
    } catch {
      alert('Falha na autenticação');
    }
  }
  const handleSingOut=()=>{
    setUser({} as IUser);
  }
  return(
  <AuthContext.Provider value={{user, handleLogin,handleSingOut}}>{children}</AuthContext.Provider>
  )};

