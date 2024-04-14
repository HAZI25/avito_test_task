import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import AppRouter from 'router/AppRouter';

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<main>
				<AppRouter />
			</main>
			<Footer />
		</div>
	);
};

export default App;
