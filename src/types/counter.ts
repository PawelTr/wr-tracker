export interface CounterState {
  _id: number,
  ownerId: number,
  title: string,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
  isLoading: boolean,
}

export interface CreateCounter {
  ownerId: number,
  title: string,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
  isLoading: boolean,
}

export interface UpdateCounter {
  ownerId?: number,
  title?: string,
  currentSessionValue?: number,
  weekValue?: number,
  monthValue?: number,
  goal?: number,
  isActive?: boolean,
  activeIntervalId?: number,
  isLoading: boolean,
}

export interface CountersState {
  loading: boolean,
  error: string,
  counters: CounterState[],
}

export enum CountersActionTypes {
  SET_COUNTER = 'SET_COUNTER',
  SET_GOAL = 'SET_GOAL',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_INTERVAL_ID = 'SET_INTERVAL_ID',
  SET_COUNTER_TITLE = 'SET_COUNTER_TITLE',
  ADD_COUNTER = 'ADD_COUNTER',
  FETCH_COUNTERS = 'FETCH_COUNTERS',
  FETCH_COUNTERS_SUCCESS = 'FETCH_COUNTERS_SUCCESS',
  FETCH_COUNTERS_ERROR = 'FETCH_COUNTERS_ERROR',
  PATCH_COUNTER = 'PATCH_COUNTER',
  PATCH_COUNTER_SUCCESS = 'PATCH_COUNTER_SUCCESS',
  PATCH_COUNTER_ERROR = 'PATCH_COUNTER_ERROR',
}

interface FetchCounters {
  type: CountersActionTypes.FETCH_COUNTERS,
}

interface FetchCountersSuccess {
  type: CountersActionTypes.FETCH_COUNTERS_SUCCESS,
  payload: CounterState[],
}

interface FetchCountersError {
  type: CountersActionTypes.FETCH_COUNTERS_ERROR,
  payload: string,
}

interface PatchCounter {
  type: CountersActionTypes.PATCH_COUNTER,
  payload: number,
}

interface PatchCounterSuccess {
  type: CountersActionTypes.PATCH_COUNTER_SUCCESS,
  payload: CounterState,
}

interface PatchCounterError {
  type: CountersActionTypes.PATCH_COUNTER_ERROR,
  payload: string,
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
  | FetchCounters
  | FetchCountersSuccess
  | FetchCountersError
  | PatchCounter
  | PatchCounterSuccess
  | PatchCounterError