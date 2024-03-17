import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

const UserDataUpdateView = ({ user }) => {
	const [username, setUsername] = useState(user.Username);
	const [email, setEmail] = useState(user.Email);
	const [birthdate, setBirthdate] = useState(user.Birthday);
	const token = localStorage.getItem('token');

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			Username: username,
			// Password: password,
			Email: email,
			Birthday: birthdate
				? new Date(birthdate).toISOString().substring(0, 10)
				: null,
		};

		console.log(data);
		console.log(username);
		fetch(`${MOVIES_API_URL}users/${username}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		})
			.then(async (response) => {
				if (response.ok) {
					const updatedUser = await response.json();
					localStorage.setItem('user', JSON.stringify(updatedUser));
					setUsername(updatedUser);
					alert('Update was successful');
				} else {
					alert('Update failed =>' + response.status);
				}
			})

			.catch((err) => alert('Something went wrong' + err));
	};

	return (
		<>
			<h2> Update Your Data </h2>
			<Form onSubmit={handleSubmit} style={{ color: 'white' }}>
				<Form.Group ControlId="formUsername" className="mb-3">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter your Username"
						required
						min-length={5}
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
				<div className="d-flex justify-content-between">
					<Button variant="primary" type="submit">
						Update
					</Button>
					<Link to={'/profile'}>
						<Button variant="warning">Cancel</Button>
					</Link>
				</div>
			</Form>
		</>
	);
};

UserDataUpdateView.propTypes = {
	user: (PropTypes.shape = {
		username: PropTypes.string,
		email: PropTypes.string,
		birthdate: PropTypes.string,
	}),
};

export default UserDataUpdateView;
