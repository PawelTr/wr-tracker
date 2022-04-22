import { Dispatch } from 'redux';
import { CounterAction, CountersActionTypes, CounterState } from '../../types/counter';
import axios from 'axios'

export const updateCounter = (id: number, count: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_COUNTER, payload: {id, count}})
  }
}

export const updateGoal = (id: number, count: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_GOAL, payload: {id, count}})
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

export const setTitle = (id: number, title: string) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.SET_COUNTER_TITLE, payload: {id, title}})
  }
}

export const addCounter = (counter: CounterState) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({type: CountersActionTypes.ADD_COUNTER, payload: counter})
  }
}

export const fetchCounters = () => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS})
      const response = await axios.get('http://localhost:4000/counters/0')
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_ERROR, payload: 'Can\'t load counters'})
    }
  }
}

