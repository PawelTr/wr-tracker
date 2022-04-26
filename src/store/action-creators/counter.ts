import { Dispatch } from 'redux';
import {
  CounterAction,
  CountersActionTypes,
  CreateCounterDto,
  UpdateCounterDto
} from '../../types/counter';
import $api from '../../http';

export const fetchCounters = (userId: number) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS})
      const response = await $api.get(`/counters/${userId}`)
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.FETCH_COUNTERS_ERROR, payload: 'Can\'t load counters'})
    }
  }
}

export const patchCounter = (counterId: string, updateCounter: UpdateCounterDto) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.PATCH_COUNTER, payload: counterId})
      const response = await $api.patch(`/counters/${counterId}`, {...updateCounter})
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
      const response = await $api.post(`/counters`, {...createCounter})
      dispatch({type: CountersActionTypes.CREATE_COUNTER_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: CountersActionTypes.CREATE_COUNTER_ERROR, payload: 'Can\'t create counter'})
    }
  }
}

export const deleteCounter = (id: string) => {
  return async (dispatch: Dispatch<CounterAction>) => {
    try {
      dispatch({type: CountersActionTypes.DELETE_COUNTER, payload: id})
      await $api.delete(`/counters/${id}`)
      dispatch({type: CountersActionTypes.DELETE_COUNTER_SUCCESS, payload: id})
    } catch (error) {
      dispatch({type: CountersActionTypes.DELETE_COUNTER_ERROR, payload: 'Can\'t delete counter'})
    }
  }
}