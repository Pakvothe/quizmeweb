import styled from 'styled-components';

const StyledStatsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;

	.title{
		width: 100%;
		text-align: center;
		text-transform: uppercase;
	}

	.StatsContainer{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0.5em;
	}

	.DougContainer{
		width: 50vw;
		height: 50vh;
		margin: auto;
	}
`;

export default StyledStatsContainer;
