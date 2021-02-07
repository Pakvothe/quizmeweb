import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 30vw;
	height: 25vh;
	justify-content: space-between;
	align-items: center;

	input {
		height: 2.5em;
		width: 90%;
		border-radius: 7px;
		border: 1px solid #999;
		padding: 0.2em 0.5em;
	}
`;

export const Button = styled.button`
	background-color: var(--clr-primary);
	color: var(--clr-white);
	border: 0;
	font: inherit;
	font-weight: 800;
	padding: 0.5em 1em;
	border-radius: 0.5em;
	cursor: pointer;
	margin: 0 0 2em 0;
	width: 90%;
	text-transform: uppercase;

	&:hover {
		box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.3);
	}

	&:focus {
		outline: none;
	}
`;
