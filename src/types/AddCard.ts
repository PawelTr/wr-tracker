export enum AddCardTypes {
  'COUNTER_CARD'= 'COUNTER',
  'SETTINGS_CARD' = 'SETTINGS_CARD',
}
export interface AddCardProps {
  type: AddCardTypes,
}