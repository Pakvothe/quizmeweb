import React from 'react';
import Image from 'next/image';
import { IQuiz } from '../pages/panel';
import StyledQuizCard from '../styles/quizCardStyled';

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
				<h1 className='info__title'>{quiz.title}</h1>
				<p className='info__desc'>{quiz.description}</p>
				<button className='card__button'>Eliminar</button>
			</div>
		</StyledQuizCard>
	);
};

export default QuizCard;
