export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export interface Customer {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  postal_code: number;
  gender: string;
  created_at: string;
}
