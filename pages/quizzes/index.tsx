import Searchbar from '@components/Searchbar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import { getQuizzesBySearchInput } from '../../redux/slices/quizzes';
import { IState } from '../../types/slices';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { quizzes } = useSelector((state: IState) => state.quizzes);

	useEffect(() => {
		dispatch(
			getQuizzesBySearchInput({ input: '', categoryFilter: '', page: 1 })
		);
	}, []);

	return (
		<>
			<main className='container'>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Searchbar />
				</div>
				<CardsContainer quizzes={quizzes} />
			</main>
		</>
	);
};

export default Panel;
