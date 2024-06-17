export interface Film {
  actors: any;
  film_id: number;
  title: string;
}

export interface Actor {
  actor_id: number;
  first_name: string;
  last_name: string;
  films: Film[];
}