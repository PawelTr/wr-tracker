import { Dispatch } from 'redux';
import { CounterAction, CountersActionTypes, CounterState, UpdateCounter } from '../../types/counter';
import axios from 'axios'

export const updateCounter = (id: number, count: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_COUNTER, payload: {id, count}})
  }
}

export const setActive = (id: number, isActive: boolean) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_ACTIVE, payload: {id, isActive}})
  }
}

export const setInterval = (id: number, interval: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_INTERVAL_ID, payload: {id, interval}})
  }
}

export const addCounter = (counter: CounterState) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.ADD_COUNTER, payload: counter})
  }
}

export const fetchCounters = (userId: number) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS})
      const response = await axios.get(`http://localhost:4000/counters/${userId}`)
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_ERROR, payload: 'Can\'t load counters'})
    }
  }
}

export const patchCounter = (counterId: number, updateCounter: UpdateCounter) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.PATCH_COUNTER, payload: counterId})
      const response = await axios.patch(`http://localhost:4000/counters/${counterId}`, {...updateCounter})
      dispatch({type: CountersActionTypes.PATCH_COUNTER_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.PATCH_COUNTER_ERROR, payload: 'Can\'t patch counters'})
    }
  }
}