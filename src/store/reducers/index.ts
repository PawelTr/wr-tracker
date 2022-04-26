import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  counters: counterReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>