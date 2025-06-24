import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}) {

      const { isFav, addToFav, removeFromFav } = useMovieContext()
      const favourite = isFav(movie.id)

      function onClickFav(e) {
            e.preventDefault();
            if(favourite) removeFromFav(movie.id)
            else addToFav(movie)
      }

      return (
            <>
                  <div className="movie-card">
                        <div className="movie-poster">
                              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                              <div className="movie-overlay">
                                    <button className= {`favourite-btn ${favourite ? "active" : ""}`} onClick={onClickFav}>🤍</button>
                              </div>
                        </div>
                        <div className="movie-info">
                              <h3>{movie.title}</h3>
                              <p>{movie.release_date}</p>
                        </div>
                  </div>
            </>
      )
}

export default MovieCard;