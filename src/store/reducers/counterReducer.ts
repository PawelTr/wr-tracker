import { CounterAction, CountersActionTypes, CountersState, CounterState } from '../../types/counter';

const initialState: CountersState = {
  counters: [
    {
      id: Math.random(),
      ownerId: 0,
      title: 'Work Counter',
      currentSessionValue: 0,
      weekValue: 0,
      monthValue: 0,
      goal: 60,
      isActive: false,
      activeIntervalId: 0,
    },
    {
      id: Math.random(),
      ownerId: 0,
      title: 'Rest Counter',
      currentSessionValue: 0,
      weekValue: 0,
      monthValue: 0,
      goal: 60,
      isActive: false,
      activeIntervalId: 0,
    }
  ],
}

export default function counterReducer(state: CountersState = initialState, action: CounterAction): CountersState {
  switch (action.type) {
    case CountersActionTypes.SET_COUNTER: {
      const index = state.counters.findIndex((counter: CounterState) => counter.id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].currentSessionValue = action.payload.count;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_GOAL: {
      const index = state.counters.findIndex((counter: CounterState) => counter.id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].goal = action.payload.count;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_ACTIVE: {
      const index = state.counters.findIndex((counter: CounterState) => counter.id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].isActive = action.payload.isActive;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_INTERVAL_ID: {
      const index = state.counters.findIndex((counter: CounterState) => counter.id === action.payload.id);
      const newCountersList = [...state.counters];
      newCountersList[index].activeIntervalId = action.payload.interval;
      return {
        ...state,
        counters: [...newCountersList],
      }
    }
    case CountersActionTypes.SET_COUNTER_TITLE: {
      const index = state.counters.findIndex((counter: CounterState) => counter.id === action.payload.id);
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

export const setCounter = (id: number, count: number) => ({type: CountersActionTypes.SET_COUNTER, payload: {id, count}})

export const setGoal = (id: number, count: number) => ({type: CountersActionTypes.SET_GOAL, payload: {id, count}})

export const setActive = (id: number, isActive: boolean) => ({type: CountersActionTypes.SET_ACTIVE, payload: {id, isActive}})

export const setInterval = (id: number, interval: number) => ({type: CountersActionTypes.SET_INTERVAL_ID, payload: {id, interval}})

export const setTitle = (id: number, title: string) => ({type: CountersActionTypes.SET_INTERVAL_ID, payload: {id, title}})

export const addCounter = (id: number, counter: CounterState) => ({type: CountersActionTypes.ADD_COUNTER, payload: counter})

