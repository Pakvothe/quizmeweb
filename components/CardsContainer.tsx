import React from 'react';
import QuizCard from '../components/QuizCard';
import StyledCardsContainer from '../styles/cardsContainerStyled';

interface CardsContainerProps {
	quizzes: IQuiz[];
}

export interface IQuiz {
	id: number;
	title: string;
	description: string;
	image: string;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ quizzes }) => {
	return (
		<StyledCardsContainer>
			{quizzes.map((quiz) => (
				<QuizCard key={quiz.id} quiz={quiz} />
			))}
		</StyledCardsContainer>
	);
};

export default CardsContainer;
