import { GraphQLClient } from 'graphql-request';
const URL_API = process.env.URL_API;

export function getClient(authToken: string | null | undefined = null) {
	if (!authToken) authToken = localStorage.getItem('token');
	const client = new GraphQLClient(`${URL_API}/graphql`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return client;
}
