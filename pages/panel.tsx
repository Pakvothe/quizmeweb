import React from 'react';
import { useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { IState } from '../redux/slices/user';
interface IPanelProps {
	quizzes: IQuiz[];
}

export interface IQuiz {
	id: number;
	title: string;
	description: string;
	image: string;
}

const Panel: React.FC<IPanelProps> = () => {
	const quizzes = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit amet.',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor amet. Delectus, vero obcaecati. Facere exercitationem quaerat corporis similique deleniti!',
			image: 'http://unsplash.it/300/300',
		},
		{
			id: 2,
			title: 'title',
			description: 'description',
			image: 'http://unsplash.it/300/300',
		},
		{
			id: 3,
			title: 'title',
			description: 'description',
			image: 'http://unsplash.it/300/300',
		},
	];
	const { user } = useSelector((state: IState) => state.user);
	return (
		<>
			<main className='container'>
				<CardsContainer quizzes={quizzes} />
			</main>
		</>
	);
};

export default Panel;
