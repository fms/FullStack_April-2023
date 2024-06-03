import "./App.css";
import { ChangeEvent, useState } from "react";

interface Film {
  film_id: number,
  title: string,
  description: string,
  name: string,
  category: string
}

interface Actor {
  first_name: string,
  last_name: string
}

function App() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [filmQuery, setFilmQuery] = useState<Film>({
    film_id: 0,
    title: '',
    description: '',
    name: 'English', //This is the language
    category: ''
  });

  function handleChange(event: ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setFilmQuery(prevFilmQuery => ({
      ...prevFilmQuery,
      [name]: value
    }));
  }

  const { title, description, name, category } = filmQuery;

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (event.target) {

      try {
        const response = await fetch(`http://localhost:3000/api/films/query?title=${encodeURIComponent(filmQuery.title)}&description=${encodeURIComponent(filmQuery.description)}&language=${encodeURIComponent(filmQuery.name)}&category=${encodeURIComponent(filmQuery.category)}`);

        const text = await response.text();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = JSON.parse(text);
        console.log(data)
        setFilms(data.films)

        if (data.films.length > 0) {
          getActorsByFilm(data.films[0].film_id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  async function getActorsByFilm(filmId: number) {
    try {
      const response = await fetch(`http://localhost:3000/api/actors/query/${filmId}`)
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = JSON.parse(text);
      console.log(data)
      setActors(data.actors)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="language"
        value={name}
        onChange={handleChange}
        placeholder="Language"
      />
      <input
        type="text"
        name="category"
        value={category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">Filter By Query</button>
      <div>
        {films.map((film) => (
          <div key={film.film_id}>
            <h1>Film:</h1>
            <p>{film.title}</p>
            <p>{film.description}</p>
            <p>Language: {film.name}</p>
            <p>Category: {film.category}</p>
            <h1>Actors:</h1>
          </div>
        ))}
      </div>
      <div>
        {actors.map((actor: any) => (
          <div key={actor.actor_id}>
            <p>{actor.first_name} <span>{actor.last_name}</span></p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default App;
