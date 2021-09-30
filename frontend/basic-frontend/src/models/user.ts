export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  access_token: string;
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
