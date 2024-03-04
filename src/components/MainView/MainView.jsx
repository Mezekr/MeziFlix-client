import { useEffect, useState } from 'react';
import LoginView from '../LoginView/LoginView';
import MovieCard from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';
import SignupView from '../SignupView/SignupView';

// const MOVIES_API_URL = import.meta.env.REACT_APP_API_URL;
// console.log(MOVIES_API_URL);

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

const MainView = () => {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [user, setUser] = useState('null');

	const searchMovie = async () => {
		const response = await fetch(`${MOVIES_API_URL}movies`);
		const data = await response.json();
		setMovies(data);
	};

	useEffect(() => {
		searchMovie();
	}, []);

	if (!user) return <LoginView onLogin={(user) => setUser(user)} />;

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
		<>
			<SignupView />
			<div>
				{movies?.length <= 0 ? (
					<div className="empty">
						<h2> loading...</h2>
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
		</>
	);
};
export default MainView;
