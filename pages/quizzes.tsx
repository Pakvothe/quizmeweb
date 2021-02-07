import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { getQuizzes } from '../redux/slices/quizzes';
import { IState } from '../types/slices';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	const { quizzes } = useSelector((state: IState) => state.quizzes);

	useEffect(() => {
		dispatch(getQuizzes());
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
