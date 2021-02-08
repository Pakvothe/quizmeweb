import styled from 'styled-components';

export const StyledSearchbar = styled.input`
	background-color: var(--clr-white);
	font: inherit;
	font-size: 0.8em;
	font-weight: 600;
	padding: 0.5em 1em;
	border: 0;
	border-top-left-radius: 99em;
	border-bottom-left-radius:99em;
	margin-left: auto;
	box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.3);
	
	&:focus{
		box-shadow: inset 0 0 2px rgba(0,0,0,0.7);
		outline: none;
	}
`;

export const StyledBarButton = styled.button`
	background-color: var(--clr-white);
	border-top-right-radius: 99em;
	border-bottom-right-radius:99em;
	font: inherit;
	font-size: 0.8em;
	font-weight: 600;
	padding: 0.5em 1em;
	border: 0;
	margin-right: 2em;
	color: #999;
	border-left: 1px solid rgba(0, 0, 0, 0.3);
	cursor: pointer;
	text-transform: uppercase;
	transition: color .2s ease-in-out;
	box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.3);

	&:hover{
		color:var(--clr-primary);
	}

	&:focus{
		box-shadow: inset 0 0 2px rgba(0,0,0,0.7);
		outline: none;
	}
`
