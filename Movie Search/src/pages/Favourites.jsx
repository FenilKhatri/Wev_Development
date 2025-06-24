import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites && favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard
              key={movie.id || movie.imdbID || movie.title}
              movie={movie}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h1>No Favourites Yet</h1>
      <p>Start adding your favourite Movies</p>
    </div>
  );
}

export default Favourites;