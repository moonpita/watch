import { combineReducers } from '@reduxjs/toolkit';
import catalogReducer from './catalogReducer';

export const rootReducer = combineReducers({
  catalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>
