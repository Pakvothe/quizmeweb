import styled from 'styled-components';

const StyledQuizCard = styled.article`
	border-radius: 0.5em;
	background-color: #eee;
	display: flex;
	flex-direction: column;
	width: 350px;
	overflow: hidden;
	box-shadow: 0 7px 15px -7px rgba(0, 0, 0, 0.3);
	cursor: default;

	.card__img {
		flex: 0 0 200px;
		max-height: 200px;

		img {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
		}
	}

	.card__info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em;
		flex: 1;

		.info__title {
			font-size: 1.2em;
			padding-bottom: 0.6em;
			margin-bottom: 0.6em;
			border-bottom: 1px solid #ddd;
			text-transform: uppercase;
			cursor: pointer;
		}

		.info__desc {
			font-size: 0.9em;
			margin-bottom: 1em;
		}
	}

	.card__button {
		background: var(--clr-error);
		border: 0;
		color: var(--clr-white);
		font: inherit;
		font-weight: 800;
		cursor: pointer;
		width: 100%;
		margin-top: auto;
		padding: 0.5em;
		border-radius: 0.5em;

		&:hover {
			background-color: var(--clr-error-2);
		}
	}
`;

export default StyledQuizCard;
