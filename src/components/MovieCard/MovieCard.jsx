import PropTypes from 'prop-types';

const MovieCard = ({ movie, OnMovieClick }) => {
	return (
		<div
			onClick={() => {
				OnMovieClick(movie);
			}}
		>
			{movie.Title}
		</div>
	);
};
MovieCard.propTypes = {
	movie: PropTypes.object,
	OnMovieClick: PropTypes.func,
};

export default MovieCard;
