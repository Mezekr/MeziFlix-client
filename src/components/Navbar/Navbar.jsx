import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({ user, onLogedOut }) => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav>
			<Link to={'/'} className="logo">
				MeziFilx
			</Link>
			{/* make Navbar responsive */}
			<div className="menu" onClick={() => setOpenMenu(!openMenu)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ul className={openMenu ? 'open' : ''}>
				{!user ? (
					<>
						<li>
							<NavLink to={'/login'}>Login</NavLink>
						</li>
						<li>
							<NavLink to={'/Signup'}>Signup</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to={'/'}>Home</NavLink>
						</li>
						<li>
							<NavLink to={'/profile'}>Profile</NavLink>
						</li>
						<li>
							<NavLink to={'/logout'} onClick={onLogedOut}>
								Logout
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};
Navbar.propTypes = {
	user: PropTypes.string,
	onLogedOut: PropTypes.func,
};
