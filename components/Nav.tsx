import React from 'react';
import Link from 'next/link';
import { StyledNav } from '../styles/navStyled';
import Searchbar from './Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/users';
import { useRouter } from 'next/router';
import { changeLanguage } from '../redux/slices/global';
import strings from '@constants/strings';

/* --- Types --- */
import { IState } from '../types/slices';

const Nav = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	return (
		<StyledNav>
			<div className='container nav-container'>
				<ul className='main-nav'>
					<li>
						<Link href='/stats'>
							<a>{s.stats}</a>
						</Link>
					</li>
					<li>
						<Link href='/quizzes'>
							<a>Quizzes</a>
						</Link>
					</li>
					<li>
						<Link href='/categories'>
							<a>{s.category}</a>
						</Link>
					</li>
					<li>
						<Link href='/users'>
							<a>{s.user}</a>
						</Link>
					</li>
					<li>
						<Link href='/validations'>
							<a>{s.validations}</a>
						</Link>
					</li>
				</ul>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<ul className='side-nav'>
						<li
							onClick={() => {
								dispatch(changeLanguage());
							}}
						>
							{s.language}
						</li>
						<li
							onClick={() => {
								dispatch(logout());
								router.push('/');
							}}
						>
							{s.logout}
						</li>
					</ul>
				</div>
			</div>
		</StyledNav>
	);
};

export default Nav;
