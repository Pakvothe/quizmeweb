import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { HomeStyled } from '../styles/homeStyled';
import Image from 'next/image';
import React, { useState } from 'react';
import { userLogin } from '../redux/slices/user';

const Home = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [focus, setFocus] = useState(false);
	const [input, setInput] = useState({
		email: '',
		password: '',
	});
	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = {
			...input,
			[ev.target.name]: ev.target.value,
		};
		setInput(newValue);
	};
	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		dispatch(userLogin(input));
		router.push('/panel');
	};
	return (
		<div>
			<Head>
				<title>Quizme App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
				/>
			</Head>
			<HomeStyled>
				<div className="home__logo">
					<Image
						src="/assets/logo.png"
						width={500}
						height={500}
						alt="Picture"
					/>
					<h2>QuizMe Web</h2>
				</div>
				<form onSubmit={handleSubmit} className="home__form">
					<div className="home__form__labelContainer">
						<label className={focus ? 'full' : ''}>
							<span>Email</span>
							<input type="email" name="email" onChange={handleChange} />
						</label>
					</div>
					<div className="home__form__labelContainer">
						<label className={focus ? 'full' : ''}>
							<span>Password</span>
							<input type="password" name="password" onChange={handleChange} />
						</label>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</HomeStyled>
		</div>
	);
};
export default Home;
