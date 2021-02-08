import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '../../constants/api';
import { IQuiz } from '../../types/quizzes';
import {
	mutationDestroyQuiz,
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

export const destroyQuiz = createAsyncThunk(
	'quizzes/destroyQuiz',
	async (payload: string) => {
		const client = getClient();
		const clientRequest = await client.request(mutationDestroyQuiz, {
			quizId: payload,
		});
		return { destroyQuiz: clientRequest.destroyQuiz, id: payload };
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
		const clientRequest = await client.request(
			queryGetQuizzesBySearchInput,
			{
				...payload,
			}
		);
		return clientRequest.getQuizzesByInputSearch;
	}
);

const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes: [],
		quizDetail: {},
		loading: false,
		totalPages: 0,
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
		builder.addCase(getQuizzesBySearchInput.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			getQuizzesBySearchInput.fulfilled,
			(state, { payload }) => {
				state.quizzes = payload.quizzes;
				state.totalPages = payload.totalPages;
				state.loading = false;
			}
		);
		builder.addCase(destroyQuiz.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(destroyQuiz.fulfilled, (state, { payload }) => {
			if (payload.destroyQuiz) {
				state.quizzes = state.quizzes.filter(
					(quiz: IQuiz) => quiz._id !== payload.id
				);
			}
			state.loading = false;
		});
	},
});

export const {} = quizzesSlice.actions;

export default quizzesSlice.reducer;
