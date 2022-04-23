import { Dispatch } from 'redux';
import {
  CounterAction,
  CountersActionTypes,
  CreateCounterDto,
  UpdateCounterDto
} from '../../types/counter';
import axios from 'axios'

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

export const patchCounter = (counterId: number, updateCounter: UpdateCounterDto) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.PATCH_COUNTER, payload: counterId})
      const response = await axios.patch(`http://localhost:4000/counters/${counterId}`, {...updateCounter})
      dispatch({type: CountersActionTypes.PATCH_COUNTER_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.PATCH_COUNTER_ERROR, payload: 'Can\'t patch counter'})
    }
  }
}

export const createCounter = (createCounter: CreateCounterDto) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.CREATE_COUNTER})
      const response = await axios.post(`http://localhost:4000/counters`, {...createCounter})
      dispatch({type: CountersActionTypes.CREATE_COUNTER_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.CREATE_COUNTER_ERROR, payload: 'Can\'t create counter'})
    }
  }
}