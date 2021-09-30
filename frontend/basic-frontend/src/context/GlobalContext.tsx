import { List } from '@amcharts/amcharts4/core';
import { createContext } from 'react';


export interface User {
  token: string;
}

export interface CartItem {
  product_id: number;
  product_qty: number;
}

export interface GlobalContextProps {
  user?: User;
  setUser: (user: User) => void;
  cartItems: CartItem[];
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);
