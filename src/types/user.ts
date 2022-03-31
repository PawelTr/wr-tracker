import {  CounterState } from './counter';

export interface UserState {
  userId: number,
  userName: string,
  loading: boolean,
  WorkCounter: CounterState,
  RestCounter: CounterState,
}

export enum UserActionTypes {
  SET_WORK_COUNTER = 'SET_WORK_COUNTER',
  SET_WORK_GOAL = 'SET_WORK_GOAL',
  SET_WORK_ACTIVE = 'SET_WORK_ACTIVE',
  SET_REST_COUNTER = 'SET_REST_COUNTER',
  SET_REST_GOAL = 'SET_REST_GOAL',
  SET_REST_ACTIVE = 'SET_REST_ACTIVE',
  SET_REST_INTERVAL_ID = 'SET_REST_INTERVAL_ID',
  SET_WORK_INTERVAL_ID = 'SET_WORK_INTERVAL_ID',
}

interface SetWorkCounterAction {
  type: UserActionTypes.SET_WORK_COUNTER,
  payload: number
}

interface SetWorkGoalAction {
  type: UserActionTypes.SET_WORK_GOAL,
  payload: number
}

interface SetWorkActiveAction {
  type: UserActionTypes.SET_WORK_ACTIVE,
  payload: boolean
}

interface SetWorkIntervalAction {
  type: UserActionTypes.SET_WORK_INTERVAL_ID,
  payload: number
}

interface SetRestCounterAction {
  type: UserActionTypes.SET_REST_COUNTER,
  payload: number
}

interface SetRestGoalAction {
  type: UserActionTypes.SET_REST_GOAL,
  payload: number
}

interface SetRestActiveAction {
  type: UserActionTypes.SET_REST_ACTIVE,
  payload: boolean
}

interface SetRestIntervalAction {
  type: UserActionTypes.SET_REST_INTERVAL_ID,
  payload: number
}

export type UserAction = SetWorkCounterAction
  | SetRestCounterAction
  | SetWorkGoalAction
  | SetRestGoalAction
  | SetWorkActiveAction
  | SetRestActiveAction
  | SetRestIntervalAction
  | SetWorkIntervalAction