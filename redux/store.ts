import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './slices/global';
import userSlice from './slices/user';
import quizzesSlice from './slices/quizzes';

export default configureStore({
	reducer: {
		global: globalSlice,
		user: userSlice,
		quizzes: quizzesSlice,
	},
	devTools: true,
});
