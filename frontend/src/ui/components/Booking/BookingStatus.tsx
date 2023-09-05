import * as Dialog from '@radix-ui/react-dialog'
import { NoAuthModal } from '../Modal/NoAuthModal'
import { BookingReview } from './BookingReview'
import Cookies from 'js-cookie'
import { useBooking } from '../../../data/hooks/useBooking/useBooking'

export function BookingStatus() {
  const token = Cookies.get('token')
  const { handleConfirmBooking } = useBooking()

  return (
    <>
      <div className="flex justify-center">
        <BookingReview />
      </div>
      <div className="flex justify-center mt-5">
        {token ? (
          <button
            className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
            onClick={handleConfirmBooking}
          >
            Confirmar Reservar
          </button>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center">
              Confirmar Reservar
            </Dialog.Trigger>
            <NoAuthModal />
          </Dialog.Root>
        )}
      </div>
    </>
  )
}
