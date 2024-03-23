import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

const MovieView = ({ movies }) => {
	const { movieId } = useParams();
	const movie = movies.find((m) => m._id === movieId);
	return (
		<>
			<Row xs={1} lg={2} className="g-1">
				<Card>
					<Card.Img
						src={movie.ImagePath}
						alt={movie.Title}
						className="w-100 h-100"
						variant="center"
					/>
				</Card>

				<Card>
					<Card.Body>
						<Card.Title>{movie.Title}</Card.Title>
						<Card.Text>{movie.Description}</Card.Text>
						<Card.Text>Director: {movie.Director.Name}</Card.Text>
						<Card.Text>
							Director Bio: {movie.Director.Bio}
						</Card.Text>
						<Card.Text>
							Director Birth: {movie.Director.Birth}
						</Card.Text>
						<Card.Text>Genre: {movie.Genre.Name}</Card.Text>
						<Card.Text>
							Genre Description: {movie.Genre.Description}
						</Card.Text>
						<Card.Text>Actors: {movie.Actors}</Card.Text>
					</Card.Body>
				</Card>

				<Link to={'/'}>
					<Button
						variant="primary"
						className="d-grid gap-2"
						size="lg"
					>
						Back
					</Button>
				</Link>
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
