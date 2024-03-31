import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { favMoviesContext } from '../MainView/MainView';

const MovieCard = ({ movie, addFavMovie, removeFavMovie }) => {
	const favMoviesID = useContext(favMoviesContext);

	return (
		<Card className="h-100  bg-secondary text-white bg-opacity-75 )">
			<Card.Img src={movie.ImagePath} alt={movie.Title} />
			<Card.Body>
				<Card.Title>
					<span className="d-block w-100 fs-3">{movie.Title}</span>
				</Card.Title>
				<Card.Subtitle>
					<span className="d-block ">{movie.Director.Name}</span>
				</Card.Subtitle>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-between">
				<Link to={`/movies/${encodeURIComponent(movie._id)}`}>
					<Button variant="link" className="d-inline p-2 bg-light">
						Open
					</Button>
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
						onClick={() => {
							removeFavMovie(movie._id);
						}}
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
