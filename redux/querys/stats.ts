import { gql } from 'graphql-request';

/* --- Fragments --- */

/* --- Querys --- */

export const queryGetTotalQuiz = gql`
	{
		getTotalQuiz
	}
`;

export const queryGetNewUsers = gql`
	{
		getNewUsers
	}
`;

export const queryGetQuizzesByCategories = gql`
	{
		getQuizzesByCategories {
			id
			description_es
			description_en
			value
		}
	}
`;
