import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getClient } from '../../constants/api';
import { ICategory } from './categories';
import { mutationActivateUser, queryGetUsers } from '../querys/users';
const URL_API = process.env.URL_API;

interface IUserLogin {
	email: string;
	password: string;
}

interface IPayloadActivate {
	userId: string;
	isActive: boolean;
}

export const userLogin = createAsyncThunk(
	'user/login',
	async (payload: IUserLogin) => {
		const response = await axios.post(`${URL_API}/auth/login`, payload);
		return response.data;
	}
);

export const activateUser = createAsyncThunk(
	'user/activateUser',
	async ({ userId, isActive }: IPayloadActivate) => {
		const client = getClient();
		const clientRequest = await client.request(mutationActivateUser, {
			userId,
			isActive,
		});
		return clientRequest.activateUser;
	}
);

export const getUsers = createAsyncThunk('user/getUsers', async () => {
	const client = getClient();
	const clientRequest = await client.request(queryGetUsers);
	return clientRequest.getUsers;
});

export interface IUserState {
	user: IUser;
	users: IUserFull[];
	token: string;
	loading: boolean;
}

export interface IStatsCategory {
	[key: string]: string | number;
	id: string;
	description_en: string;
	description_es: string;
	value: number;
}

export interface IStatsState {
	totalQuizzes: number;
	totalNewUsers: number;
	quizzesByCategories: IStatsCategory[];
	loading: boolean;
}

export interface ICategoriesState {
	categories: Array<ICategory>;
	loading: false;
}

enum Language {
	ES = 'es',
	EN = 'en',
}

export interface IQuizzesState {
	quizzes: Array<IQuiz>;
	quizDetail: IQuiz;
	loading: boolean;
}

export interface IQuiz {
	_id: string;
	title: string;
	description: string;
	image: string;
	language: string;
	likes: number;
	creatorId: string;
	categoryId: string;
	questions: string[];
	time: number;
	highScores: [
		{
			user: string;
			score: number;
		}
	];
	type: string;
}

export interface IGlobalState {
	language: Language;
}

export interface IState {
	global: IGlobalState;
	users: IUserState;
	quizzes: IQuizzesState;
	categories: ICategoriesState;
	stats: IStatsState;
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

export interface IUserFull {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePic: string;
	countryCode: string;
	role: string;
	updatedAt: string;
	premium: boolean;
	isActive: boolean;
}

const usersSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		users: [],
		loading: false,
	},
	reducers: {
		logout: (state) => {
			localStorage.removeItem('token');
			state.user = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(userLogin.fulfilled, (state, { payload }) => {
			if (payload.role === 'ADMIN') {
				localStorage.setItem('token', payload.jwt);
				delete payload.jwt;
				state.user = payload;
			}
		});
		builder.addCase(activateUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(activateUser.fulfilled, (state, { payload }) => {
			if (!!payload.length) state.users = payload;
			state.loading = false;
		});
		builder.addCase(getUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getUsers.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.loading = false;
		});
	},
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
