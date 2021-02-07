import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getNewUsers,
	getQuizzesByCategories,
	getTotalQuiz,
} from '../redux/slices/stats';
import { Doughnut } from 'react-chartjs-2';
import StyledStatsContainer from '../styles/StatsStyled';
import strings from './strings';
import { IState } from '../types/slices';

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
	const s = strings[language];

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
		<main className='container'>
			<StyledStatsContainer>
				<h1 className='title'>{s.statsTitle}</h1>
				<div className='StatsContainer'>
					<h1 style={{ marginRight: '1em' }}>
						{s.statsQuantity} {totalQuizzes}
					</h1>
					<h1>
						{s.statsUsers} {totalNewUsers}
					</h1>
				</div>
				<div className='DougContainer'>
					<Doughnut data={data} width={400} height={300} />
				</div>
			</StyledStatsContainer>
		</main>
	);
};

export default Panel;
