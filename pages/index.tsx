import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { HomeStyled } from '../styles/homeStyled';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { userLogin } from '../redux/slices/users';
import { Badge } from '@styles/styledGlobal';
import { IState } from '../types/slices';
import strings from '@constants/strings';
const Home = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const [input, setInput] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const s = strings[language];
	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = {
			...input,
			[ev.target.name]: ev.target.value,
		};
		setInput(newValue);
	};
	const handleSubmit = async (ev: React.FormEvent) => {
		ev.preventDefault();
		if (!input.email) return setError(s.errorRequiredEmail);
		if (!input.password) return setError(s.errorRequiredPassword);
		if (!input.email.match(/^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i)) {
			return setError(s.errorInvalidMail);
		}
		const usercito = await dispatch(userLogin(input));
		//@ts-ignore
		if (usercito.payload?.role === 'ADMIN') {
			router.push('/quizzes');
		} else {
			setError(s.errorRole);
		}
	};

	useEffect(() => {
		setError('');
	}, [input]);

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
				{error && <Badge className='error'>{error}</Badge>}
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
