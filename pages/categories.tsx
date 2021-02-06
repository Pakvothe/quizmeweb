import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { IState } from '../redux/slices/users';
import { getCategories } from '../redux/slices/categories';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: IState) => state.categories);
	useEffect(() => {
		dispatch(getCategories());
	}, []);
	return (
		<>
			<main className='container'>
				<CardsContainer categories={categories} />
			</main>
		</>
	);
};

export default Panel;
