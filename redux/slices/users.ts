import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getClient } from '../../constants/api';
import { IPayloadActivate, IUserLogin } from '../../types/users';
import {
	mutationActivateUser,
	queryGetUsers,
	queryGetUsersByInput,
} from '../querys/users';
const URL_API = process.env.URL_API;

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

export const getUsersByInput = createAsyncThunk(
	'user/getUsersByInput',
	async (payload: string) => {
		const client = getClient();
		const clientRequest = await client.request(queryGetUsersByInput, {
			payload,
		});
		return clientRequest.getUsersByInput;
	}
);

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
		builder.addCase(getUsersByInput.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getUsersByInput.fulfilled, (state, { payload }) => {
			state.users = payload;
			state.loading = false;
		});
	},
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
