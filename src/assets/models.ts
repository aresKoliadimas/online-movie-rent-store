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
