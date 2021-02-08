import styled from 'styled-components';

const ValidationCardStyled = styled.div`
	background: #eee;
	box-shadow: 0 7px 7px -5px rgba(0, 0, 0, 0.15);
	padding: 1em;
	border-radius: 0.5em;
	margin: 0 0.75em 1.5em;
	text-align: center;
	width: 350px;
	display: flex;
	flex-direction: column;

	.validation__email {
		word-break: break-all;
	}
	.validation__fullName {
		border-bottom: 1px solid #ccc;
		padding-bottom: 1em;
		margin-bottom: 1em;
	}

	.validation__desc {
		h2 {
			font-size: 1.2em;
		}
	}

	.validation__buttons {
		margin-top: auto;
		padding-top: 1em;
	}

	.validation__button {
		border: 0;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		font: inherit;
		margin: 0 0.5em;
		font-weight: 800;

		&:hover,
		&:focus {
			filter: brightness(1.1);
			transform: scale(1.05);
			outline: none;
		}

		&:active {
			filter: none;
		}

		&.success {
			background-color: var(--clr-success);
		}
		&.error {
			background-color: var(--clr-error);
			color: var(--clr-white);
		}
	}
`;

export default ValidationCardStyled;
