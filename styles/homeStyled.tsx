import React from 'react';
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
		h2 {
			text-align: center;
		}
	}

	.home__form {
		display: flex;
		flex-direction: column;
		width: 500px;
		.home__form__labelContainer {
			position: relative;
			label {
				z-index: 1;
				span {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					transition: 0.2s;
				}
				&.full span {
					top: 10px;
					font-size: 0.8em;
				}
			}
			input {
				display: block;
				width: 100%;
				padding: 1.5em 1em 1em;
			}
		}
	}
`;
