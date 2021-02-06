import React from 'react';
import QuizCard from '../components/QuizCard';
import StyledCardsContainer from '../styles/cardsContainerStyled';
import { IQuiz, IUserFull } from '../redux/slices/users';
import { ICategory } from '../redux/slices/categories';
import CategoryCard from './CategoryCard';
import UserCard from './UserCard';

interface CardsContainerProps {
	quizzes?: IQuiz[];
	categories?: ICategory[];
	users?: IUserFull[];
}
const CardsContainer: React.FC<CardsContainerProps> = ({
	quizzes,
	categories,
	users,
}) => {
	if (users) {
		return (
			<StyledCardsContainer>
				{users.map((user) => (
					<UserCard key={user._id} user={user} />
				))}
			</StyledCardsContainer>
		);
	}
	if (categories) {
		return (
			<StyledCardsContainer>
				{categories.map((category) => (
					<CategoryCard key={category._id} category={category} />
				))}
			</StyledCardsContainer>
		);
	}
	if (quizzes) {
		return (
			<StyledCardsContainer>
				{quizzes.map((quiz) => (
					<QuizCard key={quiz._id} quiz={quiz} />
				))}
			</StyledCardsContainer>
		);
	}
	return <h1>Cargando...</h1>;
};

export default CardsContainer;
