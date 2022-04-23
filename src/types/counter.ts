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

export interface CreateCounterDto {
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

export interface UpdateCounterDto {
  ownerId?: number,
  title?: string,
  currentSessionValue?: number,
  weekValue?: number,
  monthValue?: number,
  goal?: number,
  isActive?: boolean,
  activeIntervalId?: number,
  isLoading?: boolean,
}

export interface CountersState {
  isCreationLoading: boolean,
  isLoading: boolean,
  error: string,
  counters: CounterState[],
}

export enum CountersActionTypes {
  ADD_COUNTER = 'ADD_COUNTER',
  FETCH_COUNTERS = 'FETCH_COUNTERS',
  FETCH_COUNTERS_SUCCESS = 'FETCH_COUNTERS_SUCCESS',
  FETCH_COUNTERS_ERROR = 'FETCH_COUNTERS_ERROR',
  PATCH_COUNTER = 'PATCH_COUNTER',
  PATCH_COUNTER_SUCCESS = 'PATCH_COUNTER_SUCCESS',
  PATCH_COUNTER_ERROR = 'PATCH_COUNTER_ERROR',
  CREATE_COUNTER = 'CREATE_COUNTER',
  CREATE_COUNTER_SUCCESS = 'CREATE_COUNTER_SUCCESS',
  CREATE_COUNTER_ERROR = 'CREATE_COUNTER_ERROR',
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

interface CreateCounter {
  type: CountersActionTypes.CREATE_COUNTER,
}

interface CreateCounterSuccess {
  type: CountersActionTypes.CREATE_COUNTER_SUCCESS,
  payload: CounterState,
}

interface CreateCounterError {
  type: CountersActionTypes.CREATE_COUNTER_ERROR,
  payload: string,
}

interface AddCounterAction {
  type: CountersActionTypes.ADD_COUNTER,
  payload: CounterState,
}

export type CounterAction =
  | AddCounterAction
  | FetchCounters
  | FetchCountersSuccess
  | FetchCountersError
  | PatchCounter
  | PatchCounterSuccess
  | PatchCounterError
  | CreateCounter
  | CreateCounterSuccess
  | CreateCounterError