import {  CounterState } from './counter';

export interface UserState {
  userId: number,
  userName: string,
  loading: boolean,
  counters: CounterState[],
}

export enum UserActionTypes {
  SET_COUNTER = 'SET_COUNTER',
  SET_GOAL = 'SET_GOAL',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_INTERVAL_ID = 'SET_INTERVAL_ID',
  SET_COUNTER_TITLE = 'SET_COUNTER_TITLE',
  ADD_COUNTER = 'ADD_COUNTER',
}

interface AddCounter {
  type: UserActionTypes.ADD_COUNTER,
  payload: CounterState,
}

interface SetCounterTitle {
  type: UserActionTypes.SET_COUNTER_TITLE,
  payload: {
    id: number,
    title: string,
  }
}

interface SetCounterAction {
  type: UserActionTypes.SET_COUNTER,
  payload: {
    id: number,
    count: number,
  }
}

interface SetGoalAction {
  type: UserActionTypes.SET_GOAL,
  payload: {
    id: number,
    count: number,
  }}

interface SetActiveAction {
  type: UserActionTypes.SET_ACTIVE,
  payload: {
    id: number,
    isActive: boolean,
  }
}

interface SetIntervalAction {
  type: UserActionTypes.SET_INTERVAL_ID,
  payload: {
    id: number,
    interval: number,
  }
}

export type UserAction = SetCounterAction
  | SetGoalAction
  | SetActiveAction
  | SetIntervalAction
  | SetCounterTitle
  | AddCounter