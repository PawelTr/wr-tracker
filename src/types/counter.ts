export interface CounterState {
  id: number,
  title?: string,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
}