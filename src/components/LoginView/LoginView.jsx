import PropTypes from 'prop-types';
import { useState } from 'react';

// const MOVIES_API_URL = import.meta.env.REACT_APP_API_URL;
const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';
console.log(MOVIES_API_URL);
const LoginView = ({ onLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			access: username,
			secret: password,
		};
		fetch(`${MOVIES_API_URL}login`, {
			method: 'POST',
			body: JSON.stringify(data),
		}).then((response) => {
			response.ok ? onLogin(username) : alert('Login failed');
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter your Username"
					required
					minLength={3}
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
					minLength={8}
					required
				/>
			</label>
			<button type="submit">Login</button>
		</form>
	);
};

LoginView.prototypes = {
	onLogin: PropTypes.func,
};

export default LoginView;
