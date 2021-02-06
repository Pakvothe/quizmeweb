import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './slices/global';
import statsSlice from './slices/stats';
import usersSlice from './slices/users';
import quizzesSlice from './slices/quizzes';
import categoriesSlice from './slices/categories';

export default configureStore({
	reducer: {
		global: globalSlice,
		users: usersSlice,
		quizzes: quizzesSlice,
		categories: categoriesSlice,
		stats: statsSlice,
	},
	devTools: true,
});
