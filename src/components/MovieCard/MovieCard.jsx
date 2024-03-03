import PropTypes from 'prop-types';

const MovieCard = ({ movie, OnMovieClick }) => {
	return (
		<div
			className="movies-list"
			onClick={() => {
				OnMovieClick(movie);
			}}
		>
			<img src={movie.ImagePath} alt={movie.Title} />
			{movie.Title}
		</div>
	);
};
MovieCard.propTypes = {
	movie: PropTypes.shape({
		ImagePath: String,
		Title: String,
	}),
	OnMovieClick: PropTypes.func,
};

export default MovieCard;
