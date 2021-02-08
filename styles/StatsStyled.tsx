import styled from 'styled-components';

const StyledStatsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;

	.title {
		width: 100%;
		text-align: center;
		text-transform: uppercase;
	}

	.statsContainer {
		margin: 1em 0 2em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		h2 {
			margin: 0 1em;
		}
	}

	.charts {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.chartContainer {
		width: 30vw;
		background-color: #f5f5f5;
		padding: 2em;
		border-radius: 0.5em;
		margin: 0 1em;
		border: 1px solid #ccc;

		.chart-title {
			text-align: center;
		}
	}
`;

export default StyledStatsContainer;
