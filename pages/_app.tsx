import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import store from '../redux/store';
import Nav from '../components/Nav';
import { useEffect } from 'react';
import { setLanguage } from '../redux/slices/global';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

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
			<ChakraProvider>
				<Head>
					<title>Quizme App</title>
					<link rel='icon' href='/assets/icon.png' />
					<link
						rel='stylesheet'
						integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
					/>
				</Head>
				{router.pathname === '/' || <Nav />}

				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;
