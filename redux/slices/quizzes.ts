import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '../../constants/api';
import { queryAllQuizzes } from '../querys/quizzes';

const getQuizzes = createAsyncThunk(
	'quizzes/all',
	async (payload, thunkApi) => {
		const client = getClient();
		const clientRequest = await client.request(queryAllQuizzes);
		return clientRequest.getQuizzes;
	}
);

const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes: [],
		quizDetail: {},
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getQuizzes.fulfilled, (state, { payload }) => {
			state.quizzes = payload;
		});
	},
});

export const {} = quizzesSlice.actions;

export default quizzesSlice.reducer;
