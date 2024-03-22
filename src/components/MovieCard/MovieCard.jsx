import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import favIcon from './../../assets/heart.svg';
import { useContext } from 'react';
import { favMoviesContext } from '../MainView/MainView';

const MovieCard = ({ movie, addFavMovie, removeFavMovie }) => {
	const favMoviesID = useContext(favMoviesContext);

	return (
		<Card className="h-100">
			<Card.Img src={movie.ImagePath} alt={movie.Title} />
			<Card.Body>
				<Card.Title>Title: {movie.Title}</Card.Title>
				<Card.Text>Director: {movie.Director.Name}</Card.Text>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between">
				<Link to={`/movies/${encodeURIComponent(movie._id)}`}>
					<Button variant="link">Open</Button>
				</Link>

				{!favMoviesID.includes(movie._id) ? (
					<Button
						onClick={() => {
							addFavMovie(movie._id);
						}}
						variant="light"
						className="border-dark"
					>
						🤍
					</Button>
				) : (
					<Button
						onClick={() => removeFavMovie(movie._id)}
						variant="light"
						className="border-dark"
					>
						🧡
					</Button>
				)}
			</Card.Footer>
		</Card>
	);
};
MovieCard.propTypes = {
	movie: PropTypes.shape({
		_id: PropTypes.string,
		ImagePath: PropTypes.string,
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		Director: PropTypes.shape({
			Name: PropTypes.string,
		}),
	}).isRequired,
	user: PropTypes.string,
	addFavMovie: PropTypes.func,
	favoriteMovies: PropTypes.array,
	removeFavMovie: PropTypes.func,
};

export default MovieCard;
