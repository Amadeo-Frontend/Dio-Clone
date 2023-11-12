export interface IAuthContext {
    user: any;
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleSingOut: () => void;
    }
export interface IAuthContextProps {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}