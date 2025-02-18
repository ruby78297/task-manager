import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import taskReducer from './features/taskSlice';
import { Task } from '../types';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
