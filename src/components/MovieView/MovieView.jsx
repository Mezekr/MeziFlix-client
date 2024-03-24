import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './movieView.scss';

const MovieView = ({ movies }) => {
	const { movieId } = useParams();
	const movie = movies.find((m) => m._id === movieId);
	return (
		<>
			<Row>
				<div className="movie-wrapper">
					<div className="movie-thumbnail">
						<img src={movie.ImagePath} alt={movie.Title} />
					</div>

					<div className="movie-body">
						<span className="movie-title">{movie.Title}</span>
						<p>
							<span>{movie.Genre.Name}</span>
							<span>{movie.ReleaseYear}</span>
						</p>
						<p>
							<span className="movie-director">
								{movie.Director.Name}
							</span>
						</p>
						<p className="movie-description">{movie.Description}</p>
						<span className="movie-actors"> {movie.Actors}</span>
						<Link to={'/'}>
							<Button className="trailer">Back</Button>
						</Link>
					</div>
				</div>
			</Row>
			<h2>Similar Movies</h2>
			<hr />
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
