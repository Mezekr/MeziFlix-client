import PropTypes from 'prop-types';
import { Button, Card, Row } from 'react-bootstrap';

const MovieView = ({ movie, onBackClick }) => {
	return (
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
				<Button onClick={onBackClick} variant="primary">
					Back
				</Button>
			</Card>
		</Row>
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
