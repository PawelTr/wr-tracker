import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';

export const updateWorkCounter = (count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_WORK_COUNTER, payload: count})
  }
}

export const updateRestCounter = (count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_REST_COUNTER, payload: count})
  }
}

export const updateWorkGoal = (count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_WORK_GOAL, payload: count})
  }
}

export const updateRestGoal = (count: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_REST_GOAL, payload: count})
  }
}

export const setRestActive = (isActive: boolean) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_REST_ACTIVE, payload: isActive})
  }
}

export const setWorkActive = (isActive: boolean) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_WORK_ACTIVE, payload: isActive})
  }
}

export const setWorkInterval = (interval: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_WORK_INTERVAL_ID, payload: interval})
  }
}

export const setRestInterval = (interval: number) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_REST_INTERVAL_ID, payload: interval})
  }
}