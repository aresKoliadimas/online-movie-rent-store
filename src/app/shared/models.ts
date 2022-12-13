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

export class Movie {
  constructor(
    public uuid: string,
    public title: string,
    public pub_date: number,
    public duration: number,
    public rating: number,
    public description: string,
    public poster_url: string,
    public categories: string[]
  ) {
    this.uuid = uuid;
    this.title = title;
    this.pub_date = pub_date;
    this.duration = duration;
    this.rating = rating;
    this.description = description;
    this.poster_url = poster_url;
    this.categories = categories;
  }
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

export interface RentedMovie {
  uuid: string;
  rental_date: string;
  return_date: string;
  is_paid: boolean;
  user: number;
  movie: string;
}

export interface RentalsList {
  count: number;
  next: string;
  previous: string;
  results: RentedMovie[];
}
