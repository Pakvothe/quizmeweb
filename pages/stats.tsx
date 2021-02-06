import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getNewUsers,
	getQuizzesByCategories,
	getTotalQuiz,
} from '../redux/slices/stats';
import { IState } from '../redux/slices/users';
import { Doughnut } from 'react-chartjs-2';

const Panel: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTotalQuiz());
		dispatch(getNewUsers());
		dispatch(getQuizzesByCategories());
	}, []);
	const {
		totalQuizzes,
		totalNewUsers,
		quizzesByCategories: quizzes,
		loading,
	} = useSelector((state: IState) => state.stats);
	const { language } = useSelector((state: IState) => state.global);

	if (loading) return <h1>Cargando...</h1>;

	const data = {
		labels: quizzes.map((quiz) => quiz[`description_${language}`]),
		datasets: [
			{
				data: quizzes.map((quiz) => quiz.value),
				backgroundColor: quizzes.map(() => {
					const r = Math.round(Math.random() * 255);
					const g = Math.round(Math.random() * 255);
					const b = Math.round(Math.random() * 255);
					return `rgb(${r}, ${g}, ${b})`;
				}),
				hoverBackgroundColor: quizzes.map(() => {
					const r = Math.round(Math.random() * 255);
					const g = Math.round(Math.random() * 255);
					const b = Math.round(Math.random() * 255);
					return `rgb(${r}, ${g}, ${b})`;
				}),
			},
		],
	};
	return (
		<>
			<main className='container'>
				<h1>Stats</h1>
				<h1>Cantidad de Quizzes {totalQuizzes}</h1>
				<h1>Nuevos usuarios del mes {totalNewUsers}</h1>
				<Doughnut data={data} width={400} height={400} />
			</main>
		</>
	);
};

export default Panel;
