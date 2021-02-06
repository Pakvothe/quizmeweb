import React, { ReactChild } from 'react';
import Link from 'next/link';
import { StyledNav } from '../styles/navStyled';
import Searchbar from './Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { IState, logout } from '../redux/slices/users';
import { useRouter } from 'next/router';
import { changeLanguage } from '../redux/slices/global';
const Nav = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	return (
		<StyledNav>
			<div className='container nav-container'>
				<ul className='main-nav'>
					<li>
						<Link href='/stats'>
							<a>Estadísticas</a>
						</Link>
					</li>
					<li>
						<Link href='/quizzes'>
							<a>Quizzes</a>
						</Link>
					</li>
					<li>
						<Link href='/categories'>
							<a>Categorías</a>
						</Link>
					</li>
					<li>
						<Link href='/users'>
							<a>Usuarios</a>
						</Link>
					</li>
				</ul>
				<Searchbar />
				<ul className='side-nav'>
					<li
						onClick={() => {
							dispatch(changeLanguage());
						}}
					>
						{language === 'es' ? 'Idioma' : 'Language'}
					</li>
					<li
						onClick={() => {
							dispatch(logout());
							router.push('/');
						}}
					>
						Cerrar sesión
					</li>
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
