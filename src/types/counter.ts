export interface CounterState {
  id: number,
  ownerId: number,
  title: string,
  currentSessionValue: number,
  weekValue: number,
  monthValue: number,
  goal: number,
  isActive: boolean,
  activeIntervalId: number,
}