export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
  image: string;
  qty: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
