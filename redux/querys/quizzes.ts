import { gql } from 'graphql-request';

/* --- Fragments --- */

export const EntireQuizInfo = gql`
	fragment EntireQuizInfo on Quiz {
		_id
		title
		description
		image
		language
		likes
		time
		highScores {
			_id
			user {
				_id
				firstName
				lastName
			}
			score
		}
		categoryId {
			_id
			description_en
			description_es
		}
		questions {
			_id
			title
			score
			image
			options {
				title
				result
			}
		}
	}
`;

export const EntireQuizCardInfo = gql`
	fragment EntireQuizCardInfo on QuizCard {
		_id
		title
		description
		image
		likes
		language
		categoryId
	}
`;

/* --- Querys --- */

export const queryAllQuizzes = gql`
	{
		getQuizzes {
			...EntireQuizCardInfo
		}
	}
	${EntireQuizCardInfo}
`;

export const queryGetQuiz = gql`
	query($payload: ID!) {
		getQuiz(id: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const queryGetQuizByCategory = gql`
	query($payload: ID!) {
		getQuizByCategory(catId: $payload) {
			...EntireQuizCardInfo
		}
	}
	${EntireQuizCardInfo}
`;

export const queryGetQuizzesBySearchInput = gql`
	query($input: String!, $categoryFilter: String, $page: Int) {
		getQuizzesByInputSearch(
			input: $input
			cat: $categoryFilter
			page: $page
		) {
			quizzes {
				...EntireQuizCardInfo
			}
			hasNextPage
			totalPages
		}
	}
	${EntireQuizCardInfo}
`;

/*Get quizzes by popularity*/

export const queryGtQuizzesByPopularity = gql`
	{
		searchByPopularity {
			...EntireQuizCardInfo
		}
	}
	${EntireQuizCardInfo}
`;

/*Get quizzes suggested*/

export const queryGtQuizzesSuggested = gql`
	{
		getSuggestedQuizzes {
			...EntireQuizCardInfo
		}
	}
	${EntireQuizCardInfo}
`;

/* --- Mutations --- */
export const mutationUpdateHighscore = gql`
	mutation updateHighscore($quizId: ID!, $score: Int!) {
		updateHighscore(quizId: $quizId, score: $score)
	}
`;

export const mutationDestroyQuiz = gql`
	mutation destroyQuiz($quizId: ID!) {
		destroyQuiz(quizId: $quizId)
	}
`;

export const updateLikeRequest = gql`
	mutation updateLike($quizId: ID!, $giveLike: Boolean) {
		updateLike(quizId: $quizId, giveLike: $giveLike) {
			likes
			_id
		}
	}
`;

export const quizCreateOne = gql`
	mutation createQuiz($payload: QuizInput) {
		createQuiz(quiz: $payload) {
			...EntireQuizCardInfo
		}
	}
	${EntireQuizCardInfo}
`;
