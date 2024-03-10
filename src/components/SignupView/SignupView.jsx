import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

const SignupView = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [birthdate, setBirthdate] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			Username: username,
			Password: password,
			Email: email,
			Birthdate: birthdate,
		};
		fetch(`${MOVIES_API_URL}users`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				response.ok
					? alert('Signup successful') && window.location.reload()
					: alert('Signup failed');
			})
			.catch((err) => alert('Something went wrong' + err));
	};

	return (
		<Form onSubmit={handleSubmit} style={{ color: 'white' }}>
			<Form.Group ControlId="formUsername" className="mb-3">
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					value={username}
					onChage={(e) => setUsername(e.target.value)}
					placeholder="Enter your Username"
					required
					min-length={3}
				/>
			</Form.Group>
			<Form.Group ControlId="formPassword" className="mb-3">
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
			<Form.Group controlId="formEmail" className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your Email"
					required
				/>
			</Form.Group>
			<Form.Group controlId="formBirthdate" className="mb-3">
				<Form.Label>Birthdate</Form.Label>
				<Form.Control
					type="date"
					value={birthdate}
					onChange={(e) => setBirthdate(e.target.value)}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Sign up
			</Button>
		</Form>
	);
};

export default SignupView;
