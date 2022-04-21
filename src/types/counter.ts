export interface CounterState {
  id: number,
  ownerId: number,
  title: string,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
}

export interface CountersState {
  counters: CounterState[],
}

export enum CountersActionTypes {
  SET_COUNTER = 'SET_COUNTER',
  SET_GOAL = 'SET_GOAL',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_INTERVAL_ID = 'SET_INTERVAL_ID',
  SET_COUNTER_TITLE = 'SET_COUNTER_TITLE',
  ADD_COUNTER = 'ADD_COUNTER',
}

interface AddCounterAction {
  type: CountersActionTypes.ADD_COUNTER,
  payload: CounterState,
}

interface SetCounterTitleAction {
  type: CountersActionTypes.SET_COUNTER_TITLE,
  payload: {
    id: number,
    title: string,
  }
}

interface SetCounterAction {
  type: CountersActionTypes.SET_COUNTER,
  payload: {
    id: number,
    count: number,
  }
}

interface SetGoalAction {
  type: CountersActionTypes.SET_GOAL,
  payload: {
    id: number,
    count: number,
  }}

interface SetActiveAction {
  type: CountersActionTypes.SET_ACTIVE,
  payload: {
    id: number,
    isActive: boolean,
  }
}

interface SetIntervalAction {
  type: CountersActionTypes.SET_INTERVAL_ID,
  payload: {
    id: number,
    interval: number,
  }
}

export type CounterAction = SetCounterAction
  | SetGoalAction
  | SetActiveAction
  | SetIntervalAction
  | SetCounterTitleAction
  | AddCounterAction