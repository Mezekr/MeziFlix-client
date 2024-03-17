import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const MovieView = ({ movies }) => {
	const { movieId } = useParams();
	const movie = movies.find((m) => m._id === movieId);
	return (
		<>
			<Row className="justify-content-md-center">
				<Card style={{ width: '20rem' }}>
					<Card.Img
						src={movie.ImagePath}
						alt={movie.Title}
						className="w-100"
					/>
					<Card.Body>
						<Card.Title>{movie.Title}</Card.Title>
						<Card.Subtitle>{movie.Description}</Card.Subtitle>
						<Card.Text>Director: {movie.Director.Name}</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Link to={'/'}>
							<Button variant="primary">Back</Button>
						</Link>
					</Card.Footer>
				</Card>
			</Row>
			<hr />
			<h2>Similar Movies</h2>
			<Row>
				<Col className="mb-5" md={3}>
					{movies
						.filter(
							(m) =>
								m.Genre.Name === movie.Genre.Name &&
								m.Title !== movie.Title
						)
						.map((m) => {
							return <MovieCard key={m._id} movie={m} />;
						})}
				</Col>
				;
			</Row>
		</>
	);
};
MovieView.propTypes = {
	movies: PropTypes.arrayOf(Object),
	movie: PropTypes.shape({
		Title: String,
		ImagePath: String,
		Description: String,
		Director: PropTypes.shape({ Name: String }),
		ReleaseYear: String,
	}),
};

export default MovieView;
