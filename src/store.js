import { configureStore } from '@reduxjs/toolkit';
import userReducer from './rootSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

},

);