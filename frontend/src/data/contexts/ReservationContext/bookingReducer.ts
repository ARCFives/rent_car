import { IBookingState } from '../../interfaces/IBookingState'
import { TBookingActions } from '../../types/TBookingActions'

export const bookingReducer = (
  state: IBookingState,
  action: TBookingActions
): IBookingState => {
  switch (action.type) {
    case 'ADD_CATCH_AGENCY':
      return { ...state, catchAgencyID: action.payload }
    case 'ADD_DELIVERY_AGENCY':
      return { ...state, deliveryAgencyId: action.payload }
    case 'ADD_DELIVERY_DATE':
      return { ...state, deliveryDate: action.payload }
    case 'SET_AGENCIES':
      return { ...state, ...action.payload }
    case 'ADD_CATCH_DATE':
      return { ...state, catchDate: action.payload }
    case 'ADD_CATCH_HOUR':
      return { ...state, catchHours: action.payload }
    case 'ADD_DELIVERY_HOUR':
      return { ...state, deliveryHours: action.payload }
    case 'SET_CAR':
      return { ...state, carID: action.payload }
    case 'SET_DIARY':
      return { ...state, ...action.payload }
    case 'SET_USERID':
      return { ...state, userID: action.payload }
    case 'RESET_BOOKING':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
