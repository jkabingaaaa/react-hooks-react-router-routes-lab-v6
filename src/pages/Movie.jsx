import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(r => r.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;