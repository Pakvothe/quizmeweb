import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import { IState } from '../../redux/slices/users';
import { getCategories } from '../../redux/slices/categories';
import Link from 'next/link';
import styled from 'styled-components';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: IState) => state.categories);
	useEffect(() => {
		dispatch(getCategories());
	}, []);
	return (
		<>
			<main className='container'>
				<Link href='/categories/add'>
					<div style={{width:'100%', display: 'flex', justifyContent:'flex-end'}}>
						<Button >Agregar Categoria</Button>
						</div>
				</Link>
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
	margin: 0 2.6em 2em 1em;

		&:hover {
			box-shadow: inset 0 0 7px rgba(0,0,0,0.3);
		}

		&:focus{
			outline: none;
		}
`

export default Panel;
