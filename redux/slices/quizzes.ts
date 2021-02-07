import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '../../constants/api';
import {
	queryAllQuizzes,
	queryGetQuiz,
	queryGetQuizzesBySearchInput,
} from '../querys/quizzes';

export const getQuizzes = createAsyncThunk('quizzes/all', async () => {
	const client = getClient();
	const clientRequest = await client.request(queryAllQuizzes);
	return clientRequest.getQuizzes;
});

export const getQuiz = createAsyncThunk(
	'quizzes/getById',
	async (payload: string) => {
		const client = getClient();
		const clientRequest = await client.request(queryGetQuiz, { payload });
		return clientRequest.getQuiz;
	}
);

interface IQuizzesInputPayload {
	input: string;
	categoryFilter: string;
	page: number;
}

export const getQuizzesBySearchInput = createAsyncThunk(
	'quiz/getQuizzesBySearchInput',
	async (payload: IQuizzesInputPayload) => {
		const client = getClient();
		const clientRequest = await client.request(queryGetQuizzesBySearchInput, {
			input: payload.input,
			categoryFilter: payload.categoryFilter,
			page: payload.page,
		});
		return clientRequest.getQuizzesByInputSearch;
	}
);

const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes: [],
		quizDetail: {},
		loading: false,
		hasNextPage: false,
		page: 1,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getQuizzes.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getQuizzes.fulfilled, (state, { payload }) => {
			state.quizzes = payload;
			state.loading = false;
		});
		builder.addCase(getQuiz.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getQuiz.fulfilled, (state, { payload }) => {
			state.quizDetail = payload;
			state.loading = false;
		});
		builder.addCase(getQuizzesBySearchInput.pending, (state, { payload }) => {
			state.loading = true;
		});
		builder.addCase(getQuizzesBySearchInput.fulfilled, (state, { payload }) => {
			state.quizzes = payload.quizzes;
			state.hasNextPage = payload.hasNextPage;
			state.page = payload.page;
			state.loading = false;
		});
	},
});

export const {} = quizzesSlice.actions;

export default quizzesSlice.reducer;
