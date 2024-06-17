import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from './types';

interface Actor {
  actor_id: number;
  first_name: string;
  last_name: string;
  films?: Film[] | null;
}

const ActorList = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/actors')
      .then(response => {
        const actorsData = response.data.actors;
        const promises = actorsData.map(async (actor) => {
          const filmResponse = await axios.get(`http://localhost:3000/api/films/actors/${actor.actor_id}`);
          const films = filmResponse.data;
          return { ...actor, films: Array.isArray(films) ? films : [] };
        });
        Promise.all(promises).then((actorsWithFilms) => {
          setActors(actorsWithFilms);
          setLoading(false);
        });
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.actor_id}>
          <h2>{actor.first_name} {actor.last_name}</h2>
          <p>Actor ID: {actor.actor_id}</p>
          {actor.films && (
            <ul>
              {actor.films.map(film => (
                <li key={film.film_id}>{film.title}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ActorList;