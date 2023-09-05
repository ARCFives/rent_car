import { useContext } from 'react'
import { bookingContext } from '../../../../data/contexts/ReservationContext/bookingContext'
import { useBooking } from '../../../../data/hooks/useBooking/useBooking'
import { CalendarBlank, CarSimple, Clock, Flag } from '@phosphor-icons/react'

export function BookingReview() {
  const booking = useContext(bookingContext)
  const { editBooking } = useBooking()

  return (
    <div>
      <div className="bg-gray-100 rounded shadow-sm md:w-[37.5rem]">
        <h3 className="text-center bg-blue-900 rounded-t text-lg font-medium text-white py-2 md:text-xl">
          Sua Reserva
        </h3>
        <div className="p-4">
          <h3 className="text-blue-900 text-lg font-medium">Intinerário</h3>
          <div>
            <div className="flex gap-1 items-center mt-2">
              <Flag size={24} className="fill-green-600" />
              <span className="text-gray-700">Retirada</span>
            </div>
            <div className="mt-1">
              <p className="text-gray-700 text-sm font-medium">
                {booking?.state.catchAgency}
              </p>
              <p className="text-gray-700 text-xs font-light md:text-sm">
                {booking?.state.catchLocation}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-1">
                  <CalendarBlank size={24} className="fill-blue-900" />
                  <span className="text-gray-700 font-light text-xs md:text-sm">
                    {booking?.state.catchDate.split('-').reverse().join('/')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={24} className="fill-blue-900" />
                  <span className="text-gray-700 font-light text-xs md:text-sm">
                    {booking?.state.catchHours}
                  </span>
                </div>
              </div>
              <span
                className="font-medium text-blue-700 text-xs underline hover:text-blue-500 cursor-pointer md:text-sm"
                onClick={() => editBooking(0)}
              >
                Editar
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex gap-1 items-center mt-2">
              <Flag size={24} className="fill-red-600" />
              <span className="text-gray-700">Entrega</span>
            </div>
            <div className="mt-1">
              <p className="text-gray-700 text-sm font-medium">
                {booking?.state.deliveryAgency}
              </p>
              <p className="text-gray-700 text-xs font-light md:text-sm">
                {booking?.state.deliveryLocation}
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-1">
                  <CalendarBlank size={24} className="fill-blue-900" />
                  <span className="text-gray-700 font-light text-xs md:text-sm">
                    {booking?.state.deliveryDate.split('-').reverse().join('/')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={24} className="fill-blue-900" />
                  <span className="text-gray-700 font-light text-xs md:text-sm">
                    {booking?.state.deliveryHours}
                  </span>
                </div>
              </div>
              <span
                className="font-medium text-blue-700 text-xs underline hover:text-blue-500 cursor-pointer md:text-sm"
                onClick={() => editBooking(0)}
              >
                Editar
              </span>
            </div>
            <hr className="bg-gray-300 mt-5" />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-1">
              <CarSimple size={24} className="fill-blue-900" />
              <span className="text-blue-900 text-sm font-medium">Veículo</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-light text-gray-700 text-xs md:text-sm">
                {booking?.state.carName}
              </span>
              <span
                className="font-medium text-blue-700 text-xs underline hover:text-blue-500 cursor-pointer md:text-sm"
                onClick={() => editBooking(1)}
              >
                Editar
              </span>
            </div>
            <hr className="mt-5 bg-gray-300" />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-bold text-gray-700 md:text-xl">
              Valor Total
            </span>
            <span className="text-blue-700 font-bold md:text-xl">
              R$ {booking?.state.totalBooking.replace('.', ',')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
