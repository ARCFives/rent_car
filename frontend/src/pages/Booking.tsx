import { useContext } from 'react'
import { SelectLocation } from '../ui/components/Booking/SelectLocation'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'
import { CarBooking } from '../ui/components/Booking/CarBooking'
import { stepBooking } from '../data/contexts/StepsBooking/StepsBookingContext'
import { BookingStatus } from '../ui/components/Booking/BookingStatus'

export function Booking() {
  const hiddenReserva = useContext(hiddenHeader)
  const steps = useContext(stepBooking)
  hiddenReserva?.setHiddenReserva(true)
  const bookingRender: JSX.Element[] = [
    <SelectLocation />,
    <CarBooking />,
    <BookingStatus />
  ]

  return <section>{bookingRender[steps?.step]}</section>
}
