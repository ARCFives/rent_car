export type TBookingActions =
  | { type: 'ADD_CATCH_AGENCY'; payload: string }
  | { type: 'ADD_DELIVERY_AGENCY'; payload: string }
  | { type: 'ADD_DELIVERY_DATE'; payload: string }
  | { type: 'SET_AGENCIES'; payload: object }
  | { type: 'ADD_CATCH_DATE'; payload: string }
  | { type: 'ADD_CATCH_HOUR'; payload: string }
  | { type: 'ADD_DELIVERY_HOUR'; payload: string }
  | { type: 'SET_CAR'; payload: string }
  | { type: 'SET_DIARY'; payload: object }
  | { type: 'SET_USERID'; payload: string }
  | { type: 'RESET_BOOKING'; payload: object }
