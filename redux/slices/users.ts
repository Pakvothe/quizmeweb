import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getClient } from '../../constants/api';
import {
	IPayloadActivate,
	IPromotePayload,
	IUserLogin,
	IValidationPayload,
} from '../../types/users';
import {
	mutationActivateUser,
	queryGetUsers,
	queryGetUsersByInput,
	queryGetValidations,
	mutationValidateUser,
	mutationDeleteValidation,
	mutationPromoteUser,
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

export const getValidations = createAsyncThunk(
	'user/getValidations',
	async () => {
		const client = getClient();
		const clientRequest = await client.request(queryGetValidations);
		return clientRequest.getValidations;
	}
);

export const validateUser = createAsyncThunk(
	'/user/validateUser',
	async (payload: IValidationPayload) => {
		const client = getClient();
		const clientRequest = await client.request(mutationValidateUser, {
			...payload,
		});
		return clientRequest.validateUser;
	}
);

export const promoteUser = createAsyncThunk(
	'/user/promote',
	async (payload: IPromotePayload) => {
		const client = getClient();
		const clientRequest = await client.request(mutationPromoteUser, {
			...payload,
		});
		return clientRequest.promoteUser;
	}
);

export const deleteValidation = createAsyncThunk(
	'/user/deleteValidation',
	async (payload: string) => {
		const client = getClient();
		const clientRequest = await client.request(mutationDeleteValidation, {
			payload,
		});
		return clientRequest.deleteValidation;
	}
);

const usersSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		users: [],
		loading: false,
		validations: [],
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
		builder.addCase(getValidations.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getValidations.fulfilled, (state, { payload }) => {
			state.validations = payload;
			state.loading = false;
		});
		builder.addCase(validateUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(validateUser.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(deleteValidation.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteValidation.fulfilled, (state) => {
			state.loading = false;
		});
	},
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
