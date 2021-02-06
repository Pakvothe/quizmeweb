import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'es',
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'es' ? 'en' : 'es';
			localStorage.setItem('language', state.language);
		},
		setLanguage: (state, { payload }) => {
			state.language = payload;
		},
	},
});

export const { changeLanguage, setLanguage } = globalSlice.actions;

export default globalSlice.reducer;
