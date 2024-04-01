import { createContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginView from '../LoginView/LoginView';
import MovieCard from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';
import { Navbar } from '../Navbar/Navbar';
import DeleteUserView from '../Profile/DeleteUserView';
import ProfileView from '../Profile/ProfileView';
import UserDataUpdateView from '../Profile/UserDataUpdateView';
import SearchView from '../SearchView/SearchView';
import SignupView from '../SignupView/SignupView';
const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

export const favMoviesContext = createContext([]);

const MainView = () => {
	const storedUser = JSON.parse(localStorage.getItem('user'));
	const storedToken = localStorage.getItem('token');

	const [movies, setMovies] = useState([]);
	const [user, setUser] = useState(storedUser ? storedUser : null);
	const [token, setToken] = useState(storedToken ? storedToken : null);
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	const [favMoviesID, setfavMoviesID] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	// search for all movies on DB
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

	// search for a User from API/DB
	useEffect(() => {
		if (!user) return;
		fetch(`${MOVIES_API_URL}users/${user.Username}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				if (!data) {
					setFavoriteMovies();
				} else {
					setFavoriteMovies(
						movies.filter((m) =>
							data['FavouriteMovies'].includes(m._id)
						)
					);
					setfavMoviesID(data['FavouriteMovies']);
				}
			})
			.catch((err) => console.error(err));
	}, [movies, token, user]);

	// reset user and token on logout
	const onLogedOut = () => {
		setUser(null), setToken(null), localStorage.clear();
	};

	// Add movie to favourites list
	const addFavMovie = (movieId) => {
		if (!user) return;
		if (!favMoviesID.includes(movieId)) {
			fetch(`${MOVIES_API_URL}users/${user.Username}/movies/${movieId}`, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setFavoriteMovies();
						toast.warning('Movie not added successfully');
					} else {
						setFavoriteMovies(
							movies.filter((m) =>
								data['FavouriteMovies'].includes(m._id)
							)
						);
						setfavMoviesID(data['FavouriteMovies']);
						toast.success('Movie added successfully');
					}
				})
				.catch((err) => console.error(err));
		} else {
			toast.info('Already added');
		}
	};

	// Remove film from Favourites list
	const removeFavMovie = (movieId) => {
		if (!user) return;
		if (favMoviesID.includes(movieId)) {
			fetch(`${MOVIES_API_URL}users/${user.Username}/movies/${movieId}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (!data) {
						setFavoriteMovies();
					} else {
						setFavoriteMovies(
							movies.filter((m) =>
								data['FavouriteMovies'].includes(m._id)
							)
						);
						setfavMoviesID(data['FavouriteMovies']);
					}
					toast.success('Movie removed successfully');
				})
				.catch((err) => console.error(err));
		} else {
			toast.info('not on Fav yet!');
		}
	};

	return (
		<>
			{user ? (
				<>
					<Row>
						<Col>
							<Navbar user={user} onLogedOut={onLogedOut} />
						</Col>
					</Row>
					<Row>
						<SearchView
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
					</Row>
				</>
			) : (
				<Row>
					<Col>
						<Navbar user={user} onLogedOut={onLogedOut} />
					</Col>
				</Row>
			)}
			<Row className="justify-content-center">
				<Routes>
					<Route
						path="/Signup"
						element={
							<>
								{user ? (
									<Navigate to={'/'} />
								) : (
									<Col md={5}>
										<SignupView />
									</Col>
								)}
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								{user ? (
									<Navigate to={'/'} />
								) : (
									<Col md={5}>
										<LoginView
											onLogin={(user, token) => {
												setUser(user);
												setToken(token);
											}}
										/>
									</Col>
								)}
							</>
						}
					/>
					<Route
						path="/profile"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} replace />
								) : (
									<Col md={10}>
										<favMoviesContext.Provider
											value={favMoviesID}
										>
											<ProfileView
												user={user}
												movies={movies}
												favoriteMovies={favoriteMovies}
												removeFavMovie={removeFavMovie}
											/>
										</favMoviesContext.Provider>
									</Col>
								)}
							</>
						}
					/>
					<Route
						path="/movies/:movieId"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} replace />
								) : movies?.length <= 0 ? (
									<div className="empty">
										<h2> Movies not found!</h2>
									</div>
								) : (
									<>
										<Row className="justify-content-sm-center">
											<Col md={8}>
												<MovieView movies={movies} />
											</Col>
										</Row>
									</>
								)}
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} replace />
								) : movies?.length <= 0 ? (
									<div className="empty">
										<h2> The movies list is empty.</h2>
									</div>
								) : (
									<>
										{movies
											.filter((movie) => {
												return searchTerm === ''
													? movie
													: movie.Title.toLowerCase().includes(
															searchTerm.toLowerCase()
													  );
											})
											.map((movie) => {
												return (
													<Col
														key={movie._id}
														className="mb-5"
														md={4}
														xl={3}
														xxl={2}
														sm={6}
														xs={12}
													>
														<favMoviesContext.Provider
															value={favMoviesID}
														>
															<MovieCard
																movie={movie}
																favMoviesID={
																	favMoviesID
																}
																addFavMovie={
																	addFavMovie
																}
																removeFavMovie={
																	removeFavMovie
																}
															/>
														</favMoviesContext.Provider>
													</Col>
												);
											})}
									</>
								)}
							</>
						}
					/>

					<Route
						path="/logout"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} />
								) : (
									<Row className="justify-content-md-center">
										<Col md={3}>
											onLogedOut;
											<LoginView />
										</Col>
									</Row>
								)}
							</>
						}
					/>
					<Route
						path="/UserDataUpdateView"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} />
								) : (
									<Row className="justify-content-md-center">
										<Col md={3}>
											<UserDataUpdateView user={user} />
										</Col>
									</Row>
								)}
							</>
						}
					/>
					<Route
						path="/DeleteUserView"
						element={
							<>
								{!user ? (
									<Navigate to={'/login'} />
								) : (
									<Row className="justify-content-md-center">
										<Col md={3}>
											<DeleteUserView user={user} />
										</Col>
									</Row>
								)}
							</>
						}
					/>
				</Routes>
			</Row>
		</>
	);
};
export default MainView;
