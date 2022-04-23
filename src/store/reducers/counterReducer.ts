import { CounterAction, CountersActionTypes, CountersState, CounterState } from '../../types/counter';

const initialState: CountersState = {
  isCreationLoading: false,
  isLoading: false,
  error: '',
  counters: [],
}

export default function counterReducer(state: CountersState = initialState, action: CounterAction): CountersState {
  switch (action.type) {
    case CountersActionTypes.FETCH_COUNTERS: {
      return {
        ...state,
        isLoading: true,
        error: '',
        counters: []}
    }
    case CountersActionTypes.FETCH_COUNTERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        counters: action.payload,
      }
    }
    case CountersActionTypes.FETCH_COUNTERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        counters: []
      }
    }
    case CountersActionTypes.PATCH_COUNTER: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload);
      const newCountersList = [...state.counters];
      newCountersList[index].isLoading = true;
      return {
        ...state,
        counters: newCountersList,
      }
    }
    case CountersActionTypes.PATCH_COUNTER_SUCCESS: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload._id);
      const newCountersList = [...state.counters];
      newCountersList[index] = action.payload;
      return {
        ...state,
        counters: newCountersList,
      }
    }
    case CountersActionTypes.PATCH_COUNTER_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case CountersActionTypes.CREATE_COUNTER: {
      return {
        ...state,
        isCreationLoading: true,
      }
    }
    case CountersActionTypes.CREATE_COUNTER_SUCCESS: {
      const newCounter = action.payload;
      const newCountersList = [...state.counters];
      newCountersList.push(newCounter);
      return {
        ...state,
        isCreationLoading: false,
        counters: newCountersList,
      }
    }
    case CountersActionTypes.CREATE_COUNTER_ERROR: {
      return {
        ...state,
        isCreationLoading: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}