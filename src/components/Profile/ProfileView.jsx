import PropTypes from 'prop-types';
import { useState } from 'react';
import UserData from './UserData';

import { useContext } from 'react';
import { favMoviesContext } from '../MainView/MainView';
import FavoriteMoviesView from './FavoriteMoviesView';
import './profileView.scss';

const ProfileView = ({ user, favoriteMovies, removeFavMovie }) => {
	const [username] = useState(user.Username);
	const [email] = useState(user.Email);
	const [birthdate] = useState(user.Birthday);
	const favMoviesID = useContext(favMoviesContext);

	return (
		<>
			<UserData username={username} email={email} birthdate={birthdate} />
			<FavoriteMoviesView
				favoriteMovies={favoriteMovies}
				favMoviesID={favMoviesID}
				removeFavMovie={removeFavMovie}
			/>
		</>
	);
};

ProfileView.propTypes = {
	user: PropTypes.string,
	movies: PropTypes.string,
	favoriteMovies: PropTypes.array,
	removeFavMovie: PropTypes.func,
};

export default ProfileView;
