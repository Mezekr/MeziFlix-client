import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';
console.log(MOVIES_API_URL);
const LoginView = ({ onLogin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			Username: username,
			Password: password,
		};
		fetch(`${MOVIES_API_URL}login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.user) {
					localStorage.setItem('user', JSON.stringify(data.user)),
						localStorage.setItem('token', data.token),
						onLogin(data.user, data.token);
				} else {
					alert('User not found');
				}
			})
			.catch((err) => alert('Login failed ' + err));
	};
	return (
		<Form onSubmit={handleSubmit} style={{ color: 'white' }}>
			<Form.Group className="mb-3" ControlId="formUsername">
				<Form.Label>Username:</Form.Label>
				<Form.Control
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter your Username"
					required
					minLength={3}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your Password"
					required
					minLength={8}
				/>
			</Form.Group>
			<Button variant="primary" type="submit" size="lg">
				Login
			</Button>
		</Form>
	);
};

LoginView.propTypes = {
	onLogin: PropTypes.func,
};

export default LoginView;
