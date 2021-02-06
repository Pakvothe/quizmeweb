import React, { ReactChild } from 'react';
import Link from 'next/link';
import { StyledNav } from '../styles/navStyled';
import Searchbar from './Searchbar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/users';
import { useRouter } from 'next/router';
const Nav = () => {
	const dispatch = useDispatch();
	const router = useRouter();
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
					<li>Idioma</li>
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
