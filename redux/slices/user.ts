import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL_API } from '../../env';
import axios from 'axios';

interface iUserLogin {
	email: string;
	password: string;
}

export const userLogin = createAsyncThunk(
	'user/login',
	async (payload: iUserLogin, thunkAPI) => {
		const response = await axios.post(`${URL_API}/auth/login`, payload);
		console.log('response', response);
		return response.data;
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		token: '',
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(userLogin.fulfilled, (state, { payload }) => {
			state.token = payload.jwt;
			delete payload.jwt;
			state.user = payload;
		});
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
