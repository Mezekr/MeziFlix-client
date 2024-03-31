import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import MainView from './components/MainView/MainView';

function App() {
	return (
		<>
			<Container fluid>
				<MainView />
				<ToastContainer position="top-center" autoClose={1000} />
			</Container>
		</>
	);
}

export default App;
