import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getQuiz } from '../../redux/slices/quizzes';
import { IState } from '../../types/slices';
import QuizCard from '../../components/QuizCard';
interface quizzesProps {}

const quizzes: React.FC<quizzesProps> = ({}) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { quizDetail: quiz, loading } = useSelector(
		(state: IState) => state.quizzes
	);

	useEffect(() => {
		const { id } = router.query;
		if (id) {
			dispatch(getQuiz(id as string));
		}
	}, [router.query]);
	if (loading || !quiz) return <h1>Cargando...</h1>;
	return (
		<>
			<QuizCard quiz={quiz} />
		</>
	);
};

export default quizzes;
