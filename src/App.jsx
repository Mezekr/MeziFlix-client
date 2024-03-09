import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainView from './components/MainView/MainView';
// import './index.scss';

function App() {
	return (
		<>
			<div className="my-flix">
				<h1>MeziFlix</h1>
			</div>
			<Container>
				<MainView />
			</Container>
		</>
	);
}

export default App;
