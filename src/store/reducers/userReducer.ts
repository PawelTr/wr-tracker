import { UserAction, UserActionTypes, UserState } from '../../types/user';
import { CounterTypes } from '../../types/counter';


const initialState: UserState = {
  userId: 0,
  userName: 'Pavel',
  loading: false,
  WorkCounter: {
    type: CounterTypes.WORK,
    currentSessionValue: 0,
    weekValue: 0,
    monthValue: 0,
    goal: 60,
    isActive: false,
    activeIntervalId: 0,
  },
  RestCounter: {
    type: CounterTypes.REST,
    currentSessionValue: 0,
    weekValue: 0,
    monthValue: 0,
    goal: 60,
    isActive: false,
    activeIntervalId: 0,
  }
}

export default function userReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionTypes.SET_WORK_COUNTER:
      return {
        ...state,
        WorkCounter: {
          ...state.WorkCounter,
          currentSessionValue: action.payload,
        }
      }
    case UserActionTypes.SET_REST_COUNTER:
      return {
        ...state,
        RestCounter: {
          ...state.RestCounter,
          currentSessionValue: action.payload,
        }      }
    case UserActionTypes.SET_WORK_GOAL:
      return {
        ...state,
        WorkCounter: {
          ...state.WorkCounter,
          goal: action.payload,
        }
      }
    case UserActionTypes.SET_REST_GOAL:
      return {
        ...state,
        RestCounter: {
          ...state.RestCounter,
          goal: action.payload,
        }
      }
    case UserActionTypes.SET_WORK_ACTIVE:
      return {
        ...state,
        WorkCounter: {
          ...state.WorkCounter,
          isActive: action.payload,
        }
      }
    case UserActionTypes.SET_REST_ACTIVE:
      return {
        ...state,
        RestCounter: {
          ...state.RestCounter,
          isActive: action.payload,
        }
      }
    case UserActionTypes.SET_REST_INTERVAL_ID:
      return {
        ...state,
        RestCounter: {
          ...state.RestCounter,
          activeIntervalId: action.payload,
        }
      }
    case UserActionTypes.SET_WORK_INTERVAL_ID:
      return {
        ...state,
        WorkCounter: {
          ...state.WorkCounter,
          activeIntervalId: action.payload,
        }
      }
    default:
      return state;
  }
}

export const setWorkCounter = (count: number) => ({type: UserActionTypes.SET_WORK_COUNTER, payload: count})

export const setRestCounter = (count: number) => ({type: UserActionTypes.SET_REST_COUNTER, payload: count})

export const setWorkGoal = (count: number) => ({type: UserActionTypes.SET_WORK_GOAL, payload: count})

export const setRestGoal = (count: number) => ({type: UserActionTypes.SET_REST_GOAL, payload: count})

export const setRestActive = (isActive: boolean) => ({type: UserActionTypes.SET_REST_ACTIVE, payload: isActive})

export const setWorkActive = (isActive: boolean) => ({type: UserActionTypes.SET_WORK_ACTIVE, payload: isActive})

export const setWorkInterval = (interval: number) => ({type: UserActionTypes.SET_WORK_INTERVAL_ID, payload: interval})

export const setRestInterval = (interval: number) => ({type: UserActionTypes.SET_REST_INTERVAL_ID, payload: interval})