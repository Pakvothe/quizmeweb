import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import { IState } from '../../types/slices';
import { getCategories } from '../../redux/slices/categories';
import Link from 'next/link';
import styled from 'styled-components';
import strings from '@constants/strings';
import Searchbar from '@components/Searchbar';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	const { categories } = useSelector((state: IState) => state.categories);
	useEffect(() => {
		dispatch(getCategories(language));
	}, []);
	return (
		<>
			<main className='container'>
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Searchbar width={'50%'} />
					<Link href='/categories/add'>
						<Button>{s.addCat}</Button>
					</Link>
				</div>
				<CardsContainer categories={categories} />
			</main>
		</>
	);
};

const Button = styled.button`
	background-color: var(--clr-primary);
	color: var(--clr-white);
	border: 0;
	font: inherit;
	font-weight: 800;
	padding: 0.5em 1em;
	border-radius: 0.5em;
	cursor: pointer;

	&:hover {
		box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
	}

	&:focus {
		outline: none;
	}
`;

export default Panel;
