import { useContext } from 'react'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'
import { SubTitleSection } from '../ui/components/SubTitleSection'
import { useBookingList } from '../data/hooks/useBookingList/useBookingList'
import { UserBooking } from '../ui/components/UserBooking'

export function Reservations() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(false)
  const { bookings } = useBookingList()

  return (
    <section>
      <SubTitleSection title="Minhas Reservas" />
      <div className="flex flex-col gap-4 items-center">
        {bookings.map(booking => {
          return (
            <UserBooking
              bookingCode={booking.bookingCode}
              carName={booking.carName}
              dateBooking={booking.catchDate}
              key={booking.id}
            />
          )
        })}
      </div>
    </section>
  )
}
