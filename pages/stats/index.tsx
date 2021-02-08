import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getNewUsers,
	getQuizzesByCategories,
	getTotalQuiz,
	getUserStats,
} from '../../redux/slices/stats';
import { Doughnut, Bar } from 'react-chartjs-2';
import StyledStatsContainer from '../../styles/StatsStyled';
import strings from '@constants/strings';
import { IState } from '../../types/slices';
import { Spinner } from '@chakra-ui/spinner';

const Panel: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotalQuiz());
		dispatch(getNewUsers());
		dispatch(getQuizzesByCategories());
		dispatch(getUserStats());
	}, []);

	const {
		totalQuizzes,
		totalNewUsers,
		quizzesByCategories: quizzes,
		loading,
		users,
	} = useSelector((state: IState) => state.stats);
	const { language } = useSelector((state: IState) => state.global);
	const s = strings[language];

	if (loading)
		return (
			<div style={{ textAlign: 'center', margin: '200px' }}>
				<Spinner color='green' size='xl' />
			</div>
		);

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
			},
		],
	};
	const barData = {
		labels: ['Usuarios verificados', 'Usuarios no verificados'],
		datasets: [
			{
				label: 'Cantidad',
				data: [users.validatedUsers, users.notValidatedUsers],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
				borderWidth: 1,
			},
		],
	};

	return (
		<main className='container'>
			<StyledStatsContainer>
				<h1 className='title'>{s.statsTitle}</h1>
				<div className='statsContainer'>
					<h2>
						{s.statsQuantity} {totalQuizzes}
					</h2>
					<h2>
						{s.statsUsers} {totalNewUsers}
					</h2>
				</div>
				<div className='charts'>
					<div className='chartContainer'>
						<h2 className='chart-title'>Quizzes por categoría:</h2>
						<Doughnut data={data} width={100} height={100} />
					</div>
					<div className='chartContainer'>
						<h2 className='chart-title'>Cantidad de usuarios validados:</h2>
						<Bar
							data={barData}
							width={100}
							height={100}
							options={{
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true,
											},
										},
									],
								},
							}}
						/>
					</div>
				</div>
			</StyledStatsContainer>
		</main>
	);
};

export default Panel;
