import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import store from '../redux/store';
import Nav from '../components/Nav';
import { useEffect } from 'react';
import { setLanguage } from '../redux/slices/global';

interface IProps {
	Component: React.FC;
	pageProps: any;
}

/* let quizzes = [
	{
		id: 1,
		title: 'Holis',
		description: 'Description',
	},
	{
		id: 2,
		title: 'Holis',
		description: 'Description',
	},
	{
		id: 3,
		title: 'Holis',
		description: 'Description',
	},
	{
		id: 4,
		title: 'Holis',
		description: 'Description',
	},
]; */

function MyApp({ Component, pageProps }: IProps) {
	let router = useRouter();

	useEffect(() => {
		const language = localStorage.getItem('language');
		if (language) {
			store.dispatch(setLanguage(language));
		}
	}, []);

	return (
		<Provider store={store}>
			{router.pathname === '/' || <Nav />}

			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
