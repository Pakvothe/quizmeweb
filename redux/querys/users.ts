import { gql } from 'graphql-request';
import { EntireQuizInfo } from './quizzes';

export const EntireUserInfo = gql`
	fragment EntireUserInfo on User {
		_id
		firstName
		lastName
		email
		profilePic
		accountId
		socialAccount
		countryCode
		role
		isActive
	}
`;

/* --- Querys --- */
export const queryGetCompletedQuizzes = gql`
	{
		getCompletedQuizzes {
			_id
		}
	}
`;

export const queryGetUsers = gql`
	{
		getUsers {
			...EntireUserInfo
		}
	}
	${EntireUserInfo}
`;
/* --- Mutations --- */

export const mutationActivateUser = gql`
	mutation activateUser($userId: ID!, $isActive: Boolean!) {
		activateUser(userId: $userId, isActive: $isActive) {
			...EntireUserInfo
		}
	}
	${EntireUserInfo}
`;

export const queryUpdateUser = gql`
	mutation($payload: UserInput) {
		updateUser(userBody: $payload) {
			...EntireUserInfo
		}
	}
	${EntireUserInfo}
`;

export const mutationCompletedQuiz = gql`
	mutation completeQuiz($payload: ID!) {
		completeQuiz(quizId: $payload) {
			completedQuiz {
				_id
			}
		}
	}
`;

export const mutationSetNotificationToken = gql`
	mutation setNotificationToken($token: String!) {
		setNotificationToken(token: $token)
	}
`;

export const mutationChangePassword = gql`
	mutation changePassword($currPass: String!, $newPass: String!) {
		changePassword(currPass: $currPass, newPass: $newPass)
	}
`;

export const mutationChangeEmail = gql`
	mutation changeEmail($currPass: String!, $newMail: String!) {
		changeEmail(currPass: $currPass, newMail: $newMail)
	}
`;

export const queryGetUserQuizzes = gql`
	query($payload: ID!) {
		getUserQuizzes(userId: $payload) {
			...EntireQuizInfo
		}
	}
	${EntireQuizInfo}
`;

export const mutationValidateUser = gql`
	mutation($payload: ID!) {
		validateUser(userId: $payload)
	}
`;
export const mutationPremiumUser = gql`
	mutation {
		premiumUser
	}
`;