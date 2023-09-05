import { IUserBookingProps } from './IUserBookingProps'

export function UserBooking({
  bookingCode,
  carName,
  dateBooking
}: IUserBookingProps) {
  return (
    <>
      <div className="border border-gray-300 rounded w-full p-3 lg:w-[56rem]">
        <div className="flex gap-1 items-center">
          <span className="text-gray-700 font-medium">Código de reserva:</span>
          <span className="text-gray-500 font-bold uppercase">
            {bookingCode}
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-700 font-medium">Veículo:</span>
          <span className="text-gray-500 font-light">{carName}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-gray-700 font-medium">Data:</span>
          <span className="text-gray-500 font-light">
            {dateBooking.split('-').reverse().join('/')}
          </span>
        </div>
      </div>
    </>
  )
}
