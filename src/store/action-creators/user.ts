import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
import { CounterState } from '../../types/counter';

export const updateCounter = (id: number, count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_COUNTER, payload: {id, count}})
  }
}

export const updateGoal = (id: number, count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_GOAL, payload: {id, count}})
  }
}

export const setActive = (id: number, isActive: boolean) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_ACTIVE, payload: {id, isActive}})
  }
}

export const setInterval = (id: number, interval: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_INTERVAL_ID, payload: {id, interval}})
  }
}

export const setTitle = (id: number, title: string) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_COUNTER_TITLE, payload: {id, title}})
  }
}

export const addCounter = (id: number, counter: CounterState) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.ADD_COUNTER, payload: counter})
  }
}