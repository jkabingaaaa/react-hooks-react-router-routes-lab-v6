// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>View Info</Link> {/* Changed to "View Info" */}
    </div>
  );
}

export default MovieCard;