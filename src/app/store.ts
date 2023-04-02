import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postSlice'



export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts:postsReducer
  },
});

 
 


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown,  Action<string>>;
