import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'es',
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'es' ? 'en' : 'es';
		},
	},
});

export const { changeLanguage } = globalSlice.actions;

export default globalSlice.reducer;
