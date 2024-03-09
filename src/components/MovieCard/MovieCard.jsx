import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const MovieCard = ({ movie, OnMovieClick }) => {
	return (
		<Card style={{ width: '18rem' }} className="h-100">
			<Card.Img src={movie.ImagePath} alt={movie.Title} />
			<Card.Body>
				<Card.Title>Title: {movie.Title}</Card.Title>
				<Card.Text>Director: {movie.Director.Name}</Card.Text>
			</Card.Body>
			<Button
				onClick={() => OnMovieClick(movie)}
				variant="link"
				className="mt-5"
			>
				Open
			</Button>
		</Card>
	);
};
MovieCard.propTypes = {
	movie: PropTypes.shape({
		ImagePath: PropTypes.string,
		Title: PropTypes.string,
		Description: PropTypes.string,
		Director: PropTypes.shape({
			Name: PropTypes.string,
		}),
	}),
	OnMovieClick: PropTypes.func,
};

export default MovieCard;
