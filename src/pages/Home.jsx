import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(r => r.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      
      {/* Movie list - now using h2 as the test expects */}
      {movies.map((movie) => (
        <div key={movie.title} className="movie-card">
          <h2>{movie.title}</h2> {/* Changed from h3 to h2 */}
          <a href={`/movie/${movie.id}`}>View Info</a>
        </div>
      ))}
    </div>
  );
}

export default Home;