import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';

// const MOVIES_API_URL = import.meta.env.REACT_APP_API_URL;
// console.log(MOVIES_API_URL);

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/movies';

const MainView = () => {
	const [movies, setMovies] = useState([]);

	const searchMovie = async () => {
		const response = await fetch(`${MOVIES_API_URL}`);
		const data = await response.json();
		setMovies(data);
	};

	useEffect(() => {
		searchMovie();
	}, []);

	const [selectedMovie, setSelectedMovie] = useState(null);

	if (selectedMovie) {
		const setSimilarMovies = movies.filter(
			(movie) =>
				movie.Genre.Name === selectedMovie.Genre.Name &&
				movie.Title !== selectedMovie.Title
		);
		return (
			<>
				<MovieView
					movie={selectedMovie}
					onBackClick={() => setSelectedMovie(null)}
				/>
				<hr />
				<h2>Similar Movies</h2>
				<div>
					{setSimilarMovies?.map((movie) => {
						return (
							<MovieCard
								key={movie._id}
								movie={movie}
								OnMovieClick={(newSelectedMovie) =>
									setSelectedMovie(newSelectedMovie)
								}
							/>
						);
					})}
				</div>
			</>
		);
	}

	return (
		<div>
			{movies?.length <= 0 ? (
				<div className="empty">
					<h2> Movies List is Empty 😣.</h2>
				</div>
			) : (
				<div className="movie-container">
					{movies.map((movie) => {
						return (
							<MovieCard
								key={movie._id}
								movie={movie}
								OnMovieClick={(newSelectedMovie) =>
									setSelectedMovie(newSelectedMovie)
								}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default MainView;
