import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > * {
		margin: 0 1em 2em;
	}
`;

export default StyledCardsContainer;
