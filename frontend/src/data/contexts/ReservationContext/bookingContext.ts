import { createContext } from 'react'
import { IBookingState } from '../../interfaces/IBookingState'
import { TBookingActions } from '../../types/TBookingActions'

export const bookingContext = createContext<
  | { state: IBookingState; dispatch: React.Dispatch<TBookingActions> }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | undefined
>(undefined)
