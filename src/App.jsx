import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainView from './components/MainView/MainView';

function App() {
	return (
		<>
			<Container fluid>
				<MainView />
			</Container>
		</>
	);
}

export default App;
