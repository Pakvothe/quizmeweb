import { GraphQLClient } from 'graphql-request';
const REACT_APP_API = process.env.URL_API;

export function getClient() {
	const authToken = localStorage.getItem('token');
	const client = new GraphQLClient(`${REACT_APP_API}/graphql`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return client;
}
