import '../MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="movie-poster-wrap">
        <img src={props.poster} alt={`${props.title} poster`} className="movie-poster" />
      </div>
      <div className="movie-card-body">
        <h3 className="theme">{props.theme}</h3>
        <p className="featured-pick">{props.featuredPick}</p>
        <p className="genre">{props.genre}</p>
        <p className="vibe">{props.vibe}</p>
        <p className="best-for">{props.bestFor}</p>
        <p className="snack-pairing">{props.snackPairing}</p>
      </div>
    </div>
  )
}

export default MovieCard;