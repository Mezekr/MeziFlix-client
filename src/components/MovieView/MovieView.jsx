import PropTypes from 'prop-types';

const MovieView = ({ movie, onBackClick }) => {
	return (
		<>
			<div className="movie-card">
				<img src={movie.ImagePath} alt={movie.Title} />
				<div>
					<span>Title: </span>
					<span>{movie.Title}</span>
				</div>
				<div>
					<span>Description: </span>
					<span>{movie.Description}</span>
				</div>
				<div>
					<span>Director: </span>
					<span>{movie.Director.Name}</span>
				</div>
				<div>
					<span>ReleaseYear: </span>
					<span>{movie.ReleaseYear}</span>
				</div>
				<button onClick={onBackClick}>Back</button>
			</div>
		</>
	);
};
MovieView.propTypes = {
	movie: PropTypes.object,
	onBackClick: PropTypes.func,
};

export default MovieView;
