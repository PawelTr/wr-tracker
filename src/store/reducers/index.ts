import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

export const rootReducer = combineReducers({
  counters: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>