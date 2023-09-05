import { bookingContext } from './bookingContext'
import { useReducer } from 'react'
import { bookingReducer } from './bookingReducer'
import { IBookingState } from '../../interfaces/IBookingState'

// eslint-disable-next-line react-refresh/only-export-components
export const reservaState: IBookingState = {
  carID: '',
  carName: '',
  catchAgencyID: '',
  catchAgency: '',
  catchLocation: '',
  catchDate: '',
  catchHours: '',
  deliveryAgencyId: '',
  deliveryAgency: '',
  deliveryLocation: '',
  deliveryDate: '',
  deliveryHours: '',
  totalBooking: '',
  userID: ''
}

interface ToggleProps {
  children: string | JSX.Element | JSX.Element[]
}

export function BookingProvider({ children }: ToggleProps) {
  const [state, dispatch] = useReducer(bookingReducer, reservaState)

  return (
    <bookingContext.Provider value={{ state, dispatch }}>
      {children}
    </bookingContext.Provider>
  )
}
