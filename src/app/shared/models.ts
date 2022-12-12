export interface AuthResult {
  access: string;
  refresh: string;
}

export interface LoginCreds {
  username: string;
  password: string;
}

export interface UserProfile {
  exp: number;
  jti: string;
  user_id: number;
  is_admin: boolean;
}

export interface Movie {
  uuid: string;
  title: string;
  pub_date: number;
  duration: number;
  rating: number;
  description: string;
  poster_url: string;
  categories: string[];
}

export interface MoviesList {
  count: number;
  next: string;
  previous: string;
  results: Movie[];
}

export interface Profile {
  email: string;
  first_name: string;
  last_name: string;
  wallet: number;
}
