import { useState } from 'react';

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
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Enter your Username"
					required
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
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
					required
				/>
			</label>
			<label>
				Birthdate:
				<input
					type="date"
					value={birthdate}
					onChange={(e) => setBirthdate(e.target.value)}
					required
				/>
			</label>
			<button type="submit">Signup</button>
		</form>
	);
};

export default SignupView;
