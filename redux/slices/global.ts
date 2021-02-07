import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'es',
		savedInput: '',
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'es' ? 'en' : 'es';
			localStorage.setItem('language', state.language);
		},
		setLanguage: (state, { payload }) => {
			state.language = payload;
		},
		saveInput: (state, { payload }) => {
			state.savedInput = payload;
		},
	},
});

export const { changeLanguage, setLanguage, saveInput } = globalSlice.actions;

export default globalSlice.reducer;
