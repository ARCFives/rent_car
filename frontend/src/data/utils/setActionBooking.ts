import { useContext } from 'react'
import { bookingContext } from '../contexts/ReservationContext/bookingContext'
import { reservaState } from '../contexts/ReservationContext/BookingProvider'

export class SetActionBooking {
  private booking = useContext(bookingContext)
  private bookingState = reservaState

  setCatchAgency(agency: string) {
    this.booking?.dispatch({
      type: 'ADD_CATCH_AGENCY',
      payload: agency
    })
  }

  setDeliveryAgency(agency: string) {
    this.booking?.dispatch({
      type: 'ADD_DELIVERY_AGENCY',
      payload: agency
    })
  }

  setCatchDate(date: string) {
    this.booking?.dispatch({ type: 'ADD_CATCH_DATE', payload: date })
  }

  setDeliveryDate(date: string) {
    this.booking?.dispatch({ type: 'ADD_DELIVERY_DATE', payload: date })
  }

  setAgencies(data: object) {
    this.booking?.dispatch({ type: 'SET_AGENCIES', payload: data })
  }

  setCatchHour(hour: string) {
    this.booking?.dispatch({ type: 'ADD_CATCH_HOUR', payload: hour })
  }

  setDeliveryHour(hour: string) {
    this.booking?.dispatch({ type: 'ADD_DELIVERY_HOUR', payload: hour })
  }

  setCar(carID: string) {
    this.booking?.dispatch({ type: 'SET_CAR', payload: carID })
  }

  setDiary(data: object) {
    this.booking?.dispatch({ type: 'SET_DIARY', payload: data })
  }

  setUserID(userID: string) {
    this.booking?.dispatch({ type: 'SET_USERID', payload: userID })
  }

  setResetBooking() {
    this.booking?.dispatch({
      type: 'RESET_BOOKING',
      payload: this.bookingState
    })
  }
}
