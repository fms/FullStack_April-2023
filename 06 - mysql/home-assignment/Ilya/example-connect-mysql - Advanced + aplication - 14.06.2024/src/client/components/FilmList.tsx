import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchFilms = async () => {
  const response = await axios.get('http://localhost:3000/api/films');
  return response.data;
};

const useFilms = () => {
  return useQuery('films', fetchFilms, { staleTime: 10000 }); // 10 seconds
};

interface Film {
  film_id: number;
  title: string;
  actorNames: {
    actor_id: number;
    first_name: string;
    last_name: string;
  }[];
}

const FilmList: React.FC = () => {
  const { data, error, isLoading } = useFilms();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as { message: string }).message}</div>;

  return (
    <div>
      <h1>Movies and Actors</h1>
      <ul>
        {data?.map((film: { film_id: number; title: string; actorNames: { actor_id: number; first_name: string; last_name: string }[] }) => (
          <li key={film.film_id}>
            <h2>{film.title} ({film.film_id})</h2>
            <h3>Actors:</h3>
            <ul>
              {film.actorNames.map((actor: { actor_id: number; first_name: string; last_name: string }) => (
                <li key={actor.actor_id}>
                  {actor.first_name} {actor.last_name} ({actor.actor_id})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;