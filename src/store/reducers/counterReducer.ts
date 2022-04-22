import { CounterAction, CountersActionTypes, CountersState, CounterState } from '../../types/counter';

const initialState: CountersState = {
  loading: false,
  error: '',
  counters: [],
}

export default function counterReducer(state: CountersState = initialState, action: CounterAction): CountersState {
  switch (action.type) {
    case CountersActionTypes.FETCH_COUNTERS: {
      return {
        loading: true,
        error: '',
        counters: []}
    }
    case CountersActionTypes.FETCH_COUNTERS_SUCCESS: {
      return {
        loading: false,
        error: '',
        counters: action.payload,
      }
    }
    case CountersActionTypes.FETCH_COUNTERS_ERROR: {
      return {
        loading: false,
        error: action.payload,
        counters: []
      }
    }
    case CountersActionTypes.SET_COUNTER: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].currentSessionValue = action.payload.count;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_GOAL: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].goal = action.payload.count;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_ACTIVE: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].isActive = action.payload.isActive;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_INTERVAL_ID: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].activeIntervalId = action.payload.interval;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_COUNTER_TITLE: {
      const index = state.counters.findIndex((counter: CounterState) => counter._id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].title = action.payload.title;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.ADD_COUNTER: {
      return {
        ...state,
        counters: [...state.counters, action.payload],
      }
    }
    default:
      return state;
  }
}