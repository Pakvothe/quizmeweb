import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const URL_API = process.env.URL_API;

interface IUserLogin {
	email: string;
	password: string;
}

export const userLogin = createAsyncThunk(
	'user/login',
	async (payload: IUserLogin, thunkAPI) => {
		const response = await axios.post(`${URL_API}/auth/login`, payload);
		console.log('response', response);
		return response.data;
	}
);

export interface IUserState {
	user: IUser;
	token: string;
}

enum Language {
	ES = 'es',
	EN = 'en',
}

export interface IGlobalState {
	language: Language;
}

export interface IState {
	global: IGlobalState;
	user: IUserState;
}
export interface IUser {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePic: string;
	countryCode: string;
	role: string;
	updatedAt: string;
	premium: boolean;
}

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
