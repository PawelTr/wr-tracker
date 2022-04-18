export enum AddCardTypes {
  'COUNTER-CARD'= 'COUNTER',
  'SETTINGS-CARD' = 'SETTINGS-CARD',
}
export interface AddCardProps {
  type: AddCardTypes,
}