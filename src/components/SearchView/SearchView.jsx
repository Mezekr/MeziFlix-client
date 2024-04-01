import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import searchIcon from './../../assets/searchIcon.svg';
import './searchView.scss';

const SearchView = ({ searchTerm, setSearchTerm }) => {
	return (
		<Row>
			<Col>
				<div className="search">
					<input
						type="text"
						placeholder="Search a Movie"
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					></input>
					<img src={searchIcon} alt="search" />
				</div>
			</Col>
		</Row>
	);
};

SearchView.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.string,
};
export default SearchView;
