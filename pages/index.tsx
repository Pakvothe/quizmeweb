import Head from 'next/head';
import { HomeStyled } from '../styles/homeStyled';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Quizme App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeStyled>
				<h1>Hola mundo</h1>
			</HomeStyled>
		</div>
	);
}
