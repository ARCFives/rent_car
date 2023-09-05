import { useContext } from 'react'
import { HeaderReservaProps } from './HeaderReservaProps'
import { InputSelectData } from './InputHeaderData'
import { InputSelectHour } from './InputHeaderHour'
import { InputSelectAgency } from './InputSelectAgency'
import { menuHeaderBooking } from '../../../../data/contexts/MenuHeaderBooking/menuHeaderBookingContext'
import { SetActionBooking } from '../../../../data/utils/setActionBooking'
import { useBooking } from '../../../../data/hooks/useBooking/useBooking'

export function HeaderReserva({ hidden }: HeaderReservaProps) {
  const menuBooking = useContext(menuHeaderBooking)
  const actions = new SetActionBooking()
  const { handleMenuAgencies } = useBooking()

  return (
    <div
      className={`bg-blue-900 p-5 rounded-b-lg ${
        hidden ? 'hidden' : ''
      } flex flex-col gap-4 items-center md:w-4/5 md:m-auto`}
    >
      <h1 className="text-center text-3xl font-bold text-white">
        Faça sua reserva
      </h1>
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-medium text-white text-xl">Retirada</h3>
        <InputSelectAgency
          agencia={agency => actions.setCatchAgency(agency)}
          menuAgency
        />
        <div className="flex w-full">
          <InputSelectData date={date => actions.setCatchDate(date)} />
          <InputSelectHour hour={hour => actions.setCatchHour(hour)} />
        </div>
      </div>
      {menuBooking?.activeMenu ? (
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-medium text-white text-xl">Entrega</h3>
          <InputSelectAgency
            agencia={agency => actions.setDeliveryAgency(agency)}
          />
          <div className="flex w-full">
            <InputSelectData date={date => actions.setDeliveryDate(date)} />
            <InputSelectHour hour={hour => actions.setDeliveryHour(hour)} />
          </div>
        </div>
      ) : null}
      <div className="flex justify-center mt-5">
        <span
          className=" text-white text-xl uppercase bg-gradient-to-b from-blue-500 to-blue-600 py-2 px-4 rounded
          hover:brightness-125 transition-all duration-300 cursor-pointer"
          onClick={handleMenuAgencies}
        >
          Reservar
        </span>
      </div>
    </div>
  )
}
