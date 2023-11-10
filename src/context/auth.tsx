import { createContext, useState } from 'react';
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProps } from './types';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProps) => {
  const[user , setUser] = useState<IUser>({} as IUser)
  return(
  <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
  )};

