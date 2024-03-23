import PropTypes from 'prop-types';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserData = ({ username, email, birthdate }) => {
	return (
		<>
			<Row className="justify-content-md-center">
				<Card
					style={{ width: '400px' }}
					border="info"
					className="mt-50"
				>
					<Card.Img
						variant="top"
						src="https://placehold.co/300"
						alt={username}
						className="w-100"
					/>
					<Card.Body>
						<Card.Title>User: {username}</Card.Title>
						<Card.Text>Email: {email}</Card.Text>
						<Card.Text>
							Birthdate:{' '}
							{birthdate
								? new Date(birthdate)
										.toISOString()
										.substring(0, 10)
								: 'Not avialble'}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<div className="d-flex justify-content-between">
							<Link to={'/UserDataUpdateView'}>
								<Button variant="primary">Update Data</Button>
							</Link>
							<Link to={'/DeleteUserView'}>
								<Button variant="warning" className="mr-5 ">
									Delete Account
								</Button>
							</Link>
						</div>
					</Card.Footer>
				</Card>
			</Row>
		</>
	);
};

UserData.propTypes = {
	username: PropTypes.string,
	email: PropTypes.string,
	birthdate: PropTypes.string,
};

export default UserData;
