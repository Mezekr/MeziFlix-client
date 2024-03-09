import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import LoginView from '../LoginView/LoginView';
import MovieCard from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';
import SignupView from '../SignupView/SignupView';

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

const MainView = () => {
	const storedUser = localStorage.getItem('user');
	const storedToken = localStorage.getItem('token');

	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [user, setUser] = useState(storedUser ? storedUser : null);
	const [token, setToken] = useState(storedToken ? storedToken : null);

	const searchMovie = async (token) => {
		const response = await fetch(`${MOVIES_API_URL}movies`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = await response.json();
		setMovies(data);
	};

	useEffect(() => {
		if (!token) return;
		searchMovie(token);
	}, [token]);

	return (
		<>
			<Row className="justify-content-md-center">
				{!user ? (
					<>
						<Col md={5}>
							<h2>Login</h2>
							<LoginView
								onLogin={(user, token) => {
									setUser(user);
									setToken(token);
								}}
							/>

							<br />
							<h2 style={{ color: 'white' }}>
								Sign up as a new user below
							</h2>
							<br />
							<SignupView />
						</Col>
					</>
				) : selectedMovie ? (
					<>
						<Row className="justify-content-md-center">
							<Col md={8}>
								<MovieView
									movie={selectedMovie}
									onBackClick={() => setSelectedMovie(null)}
								/>
							</Col>
						</Row>
						<hr />
						<h2>Similar Movies</h2>
						<Row>
							<Col className="mb-5" md={3}>
								{movies
									.filter(
										(movie) =>
											movie.Genre.Name ===
												selectedMovie.Genre.Name &&
											movie.Title !== selectedMovie.Title
									)
									.map((movie) => {
										return (
											<MovieCard
												key={movie._id}
												movie={movie}
												OnMovieClick={(
													newSelectedMovie
												) =>
													setSelectedMovie(
														newSelectedMovie
													)
												}
											/>
										);
									})}
							</Col>
							;
						</Row>
					</>
				) : movies?.length <= 0 ? (
					<div className="empty">
						<h2> loading...</h2>
					</div>
				) : (
					<>
						{movies.map((movie) => {
							return (
								<Col
									key={movie._id}
									className="mb-5"
									sm={6}
									md={4}
									xl={3}
								>
									<MovieCard
										movie={movie}
										OnMovieClick={(newSelectedMovie) =>
											setSelectedMovie(newSelectedMovie)
										}
									/>
								</Col>
							);
						})}
					</>
				)}
			</Row>
			<Row className="justify-content-md-center">
				<Col md={3}>
					<Button
						onClick={() => {
							setUser(null);
							setToken(null);
							localStorage.clear();
						}}
						variant="secondary"
						size="lg"
					>
						Logout
					</Button>
				</Col>
			</Row>
		</>
	);
};
export default MainView;
