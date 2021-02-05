import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './slices/global';
import userSlice from './slices/user';

export default configureStore({
	reducer: {
		global: globalSlice,
		user: userSlice,
	},
	devTools: true,
});
