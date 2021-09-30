import { createContext } from "react";

export interface User {
  token: string;
}

export interface GlobalContextProps {
  user?: User;
  setUser: (user: User) => void;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
