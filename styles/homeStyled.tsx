import styled from 'styled-components';

export const HomeStyled = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.home__logo {
		img {
			width: 200px;
			height: 200px;
		}
		h1 {
			text-align: center;
		}
	}

	.home__form {
		width: 90%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
	}

	.form__input {
		display: block;
		padding: 0.5em 1em;
		font: inherit;
		margin: 0.5em 0;
		border: 1px solid #ccc;
		border-radius: 0.5em;
		box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.1);

		&:hover,
		&:focus {
			box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
		}
	}

	.form__btn {
		background-color: var(--clr-primary);
		color: var(--clr-white);
		border: 0;
		font: inherit;
		font-weight: 800;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		cursor: pointer;
		margin-top: 0.5em;
	}
`;
