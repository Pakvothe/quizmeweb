import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '../../constants/api';
import {
	queryGetTotalQuiz,
	queryGetNewUsers,
	queryGetQuizzesByCategories,
	queryGetUserStats,
} from '../querys/stats';

export const getTotalQuiz = createAsyncThunk('stats/quizzes', async () => {
	const client = getClient();
	const clientRequest = await client.request(queryGetTotalQuiz);
	return clientRequest.getTotalQuiz;
});

export const getNewUsers = createAsyncThunk('stats/newUsers', async () => {
	const client = getClient();
	const clientRequest = await client.request(queryGetNewUsers);
	return clientRequest.getNewUsers;
});

export const getUserStats = createAsyncThunk('stats/getUserStats', async () => {
	const client = getClient();
	const clientRequest = await client.request(queryGetUserStats);
	return clientRequest.getUserStats;
});

export const getQuizzesByCategories = createAsyncThunk(
	'stats/quizzesbycategories',
	async () => {
		const client = getClient();
		const clientRequest = await client.request(queryGetQuizzesByCategories);
		return clientRequest.getQuizzesByCategories;
	}
);

const statsSlice = createSlice({
	name: 'stats',
	initialState: {
		totalQuizzes: 0,
		totalNewUsers: 0,
		quizzesByCategories: [],
		loading: false,
		users: {},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTotalQuiz.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getTotalQuiz.fulfilled, (state, { payload }) => {
			state.totalQuizzes = payload;
			state.loading = false;
		});
		builder.addCase(getNewUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getNewUsers.fulfilled, (state, { payload }) => {
			state.totalNewUsers = payload;
			state.loading = false;
		});
		builder.addCase(getQuizzesByCategories.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			getQuizzesByCategories.fulfilled,
			(state, { payload }) => {
				state.quizzesByCategories = payload;
				state.loading = false;
			}
		);
		builder.addCase(getUserStats.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getUserStats.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.loading = false;
		});
	},
});

export const {} = statsSlice.actions;

export default statsSlice.reducer;
