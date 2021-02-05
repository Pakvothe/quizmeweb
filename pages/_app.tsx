import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { React } from '@ungap/global-this';

interface IProps {
	Component: React.FC;
	pageProps: any;
}

function MyApp({ Component, pageProps }: IProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />;
		</Provider>
	);
}

export default MyApp;
