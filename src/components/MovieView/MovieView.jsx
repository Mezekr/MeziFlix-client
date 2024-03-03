import PropTypes from 'prop-types';

const MovieView = ({ movie, onBackClick }) => {
	return (
		<>
			<div className="movie-card">
				<img src={movie.ImagePath} alt={movie.Title} />
				<div className="movie-details">
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
				</div>
				<button onClick={onBackClick}>Back</button>
			</div>
		</>
	);
};
MovieView.propTypes = {
	movie: PropTypes.shape({
		Title: String,
		ImagePath: String,
		Description: String,
		Director: PropTypes.shape({ Name: String }),
		ReleaseYear: String,
	}),
	onBackClick: PropTypes.func,
};

export default MovieView;
