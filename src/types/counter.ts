export interface CounterState {
  type: CounterTypes,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
}

export enum CounterTypes {
  WORK = 'Work',
  REST = 'Rest'
}