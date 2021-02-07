import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { HomeStyled } from '../styles/homeStyled';
import Image from 'next/image';
import React, { useState } from 'react';
import { userLogin } from '../redux/slices/users';

const Home = () => {
	const router = useRouter();
	const dispatch = useDispatch();
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
	const handleSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();
		const usercito = await dispatch(userLogin(input));
		//@ts-ignore
		if (usercito.payload?.role === 'ADMIN') {
			router.push('/quizzes');
		}
	};
	return (
		<div>
			<HomeStyled>
				<div className='home__logo'>
					<Image
						src='/assets/logo.png'
						width={500}
						height={500}
						alt='Picture'
					/>
					<h1>QuizMe Web</h1>
				</div>
				<form onSubmit={handleSubmit} className='home__form'>
					<input
						type='email'
						name='email'
						placeholder='email'
						onChange={handleChange}
						className='form__input'
					/>
					<input
						className='form__input'
						placeholder='password'
						type='password'
						name='password'
						onChange={handleChange}
					/>
					<button type='submit' className='form__btn'>
						Enviar
					</button>
				</form>
			</HomeStyled>
		</div>
	);
};
export default Home;
