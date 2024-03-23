import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import MovieCard from '../MovieCard/MovieCard';
import './profileView.scss';

const FavoriteMoviesView = ({
	favoriteMovies,
	favMoviesID,
	removeFavMovie,
}) => {
	return (
		<>
			<h2>Favorite Movies </h2>
			<div className="movies-container">
				{favoriteMovies?.length <= 0 ? (
					<div className="empty">
						<h2>You have no favourite movies yet!</h2>
					</div>
				) : (
					<>
						{favoriteMovies?.map((movie) => {
							return (
								<Col
									key={movie._id}
									className="mb-3"
									sm={6}
									md={4}
									lg={3}
									xl={3}
									xxl={2}
								>
									<MovieCard
										movie={movie}
										favMoviesID={favMoviesID}
										removeFavMovie={removeFavMovie}
									/>
								</Col>
							);
						})}
					</>
				)}
			</div>
		</>
	);
};

FavoriteMoviesView.propTypes = {
	favoriteMovies: PropTypes.arrayOf(Object),
	favMoviesID: PropTypes.array,
	removeFavMovie: PropTypes.func,
};

export default FavoriteMoviesView;
