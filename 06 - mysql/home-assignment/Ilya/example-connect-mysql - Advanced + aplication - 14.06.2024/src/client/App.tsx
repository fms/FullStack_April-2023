import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Film } from './types';
import ActorList from './ActorList';
import FilmList from './components/FilmList';

interface Actor {
  actor_id: number;
  first_name: string;
  last_name: string;
  films?: Film[] | null;
}

const App: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [actorsResponse, filmsResponse] = await Promise.all([
          axios.get('http://localhost:3000/api/actors'),
          axios.get('/api/films'),
        ]);
        const actorsData = actorsResponse.data.actors;
        const filmsData = filmsResponse.data;
        const promises = actorsData.map(async (actor: { actor_id: any; }) => {
          const filmResponse = await axios.get(`http://localhost:3000/api/films/actors/${actor.actor_id}`);
          const films = filmResponse.data;
          return {...actor, films: Array.isArray(films)? films : [] };
        });
        Promise.all(promises).then((actorsWithFilms) => {
          setActors(actorsWithFilms);
          setFilms(filmsData);
          setLoading(false);
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Actors</h1>
      <ActorList actors={actors} />
      <h1>Films</h1>
      <FilmList films={films} />
    </div>
  );
};

export default App;