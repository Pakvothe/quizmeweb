import React, { ReactChild } from 'react';
import Link from 'next/link';
import { StyledNav } from '../styles/navStyled';
import Searchbar from './Searchbar';
const Nav = () => {
	return (
		<StyledNav>
			<div className='container nav-container'>
				<ul className='main-nav'>
					<li>
						<Link href='/panel/stats'>
							<a>Estadísticas</a>
						</Link>
					</li>
					<li>
						<Link href='/panel/quizzes'>
							<a>Quizzes</a>
						</Link>
					</li>
					<li>
						<Link href='/panel/categories'>
							<a>Categorías</a>
						</Link>
					</li>
					<li>
						<Link href='/panel/users'>
							<a>Usuarios</a>
						</Link>
					</li>
				</ul>
				<Searchbar />
				<ul className='side-nav'>
					<li>Idioma</li>
					<li>Cerrar sesión</li>
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
