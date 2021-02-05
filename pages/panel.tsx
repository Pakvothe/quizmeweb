import React from 'react';
import Head from 'next/head';
import { URL_API } from '../env';
const Panel = () => {
	return (
		<div>
			<Head>
				<title>Yo soy el panel playa</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>{URL_API}</h1>
		</div>
	);
};

export default Panel;
