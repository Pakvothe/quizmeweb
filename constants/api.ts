import { GraphQLClient } from 'graphql-request';
const VERCEL_URL = process.env.VERCEL_URL;

export function getClient(authToken: string | null | undefined = null) {
	if (!authToken) authToken = localStorage.getItem('token');
	const client = new GraphQLClient(`${VERCEL_URL}/graphql`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return client;
}
