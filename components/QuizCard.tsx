import React from 'react';
import Image from 'next/image';
import { IQuiz } from '../redux/slices/users';
import StyledQuizCard from '../styles/quizCardStyled';
import Link from 'next/link';

interface QuizCardProps {
	quiz: IQuiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
	return (
		<StyledQuizCard>
			<div className='card__img'>
				<img src={quiz.image} alt='Alt' />
			</div>
			<div className='card__info'>
				<Link href={`/quizzes/${quiz._id}`}>
					<h1 className='info__title'>{quiz.title}</h1>
				</Link>
				<p className='info__desc'>{quiz.description}</p>
				<button className='card__button'>Eliminar</button>
			</div>
		</StyledQuizCard>
	);
};

export default QuizCard;
