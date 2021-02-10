import Searchbar from '@components/Searchbar';
import { getValidations } from '@redux/slices/users';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import { getQuizzesBySearchInput } from '../../redux/slices/quizzes';
import { IState } from '../../types/slices';
import { useRouter } from 'next/router';
import { getCategories } from '@redux/slices/categories';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { quizzes } = useSelector((state: IState) => state.quizzes);
	const [categoryFilter, setCategoryFilter] = useState('');
	const { language } = useSelector((state: IState) => state.global);
	const { categories } = useSelector((state: IState) => state.categories);
	const select = useRef(null);
	const router = useRouter();

	useEffect(() => {
		dispatch(
			getQuizzesBySearchInput({
				input: '',
				categoryFilter: (router.query.category as string) || '',
				page: 1,
			})
		);
		dispatch(getValidations());
		if (!categories.length) dispatch(getCategories(language));
	}, []);

	useEffect(() => {
		if (typeof router.query.category === 'string')
			setCategoryFilter(router.query.category);
	}, [categories]);

	return (
		<>
			<main className='container'>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<select
						ref={select}
						name='catPicker'
						onChange={(e) => setCategoryFilter(e.target.value)}
						value={categoryFilter}
						style={{ marginRight: '20px' }}
					>
						<option value=''>{language == 'es' ? 'Todas' : 'All'}</option>
						{categories.length &&
							categories.map((cat) => (
								<option value={cat._id} key={cat._id}>
									{cat[`description_${language}`]}
								</option>
							))}
					</select>
					<Searchbar categoryFilter={categoryFilter} />
				</div>
				<CardsContainer quizzes={quizzes} />
			</main>
		</>
	);
};

export default Panel;
