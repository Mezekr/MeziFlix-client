import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MOVIES_API_URL = 'https://meziflix-api-v1.onrender.com/';

const DeleteUserView = ({ user }) => {
	const token = localStorage.getItem('token');

	const handeleDeleteAccount = (userId) => {
		fetch(`${MOVIES_API_URL}users/${userId}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response.ok) {
					alert('Account deleted Successully');
					localStorage.clear();
					window.location.reload();
				}
			})
			.catch((err) => console.error(err));
	};
	return (
		<>
			<Row className="position-absolute top-50 start-50 translate-middle">
				<Col md={5} lg={6}>
					<Card
						style={{ width: '20rem' }}
						border="danger"
						className="text-center col-md-5"
					>
						<Card.Body variant="danger">
							<Card.Title>
								Are you sure that you want to delete your
								account?
							</Card.Title>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex justify-content-between">
								<Link to={'/login'}>
									<Button
										onClick={() =>
											handeleDeleteAccount(user.Username)
										}
										variant="primary"
									>
										Yes
									</Button>
								</Link>
								<Link to={'/profile'}>
									<Button variant="warning">Cancel</Button>
								</Link>
							</div>
						</Card.Footer>
						{/* </Card.Body> */}
					</Card>
				</Col>
			</Row>
		</>
	);
};

DeleteUserView.propTypes = {
	user: PropTypes.string,
};

export default DeleteUserView;
