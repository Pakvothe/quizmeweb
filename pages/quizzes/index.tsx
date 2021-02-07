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
				<CardsContainer quizzes={quizzes} />
			</main>
		</>
	);
};

export default Panel;
