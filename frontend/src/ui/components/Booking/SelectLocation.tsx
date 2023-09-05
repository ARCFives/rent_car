import { MapPin } from '@phosphor-icons/react'
import { InputSelectHour } from '../MenuHeader/HeaderReserva/InputHeaderHour'
import { SelectAgencyBooking } from './SelectAgencyBooking'
import { SelectDateBooking } from './SelectDateBooking'
import { SetActionBooking } from '../../../data/utils/setActionBooking'
import { useBooking } from '../../../data/hooks/useBooking/useBooking'

export function SelectLocation() {
  const actions = new SetActionBooking()
  const { handleAgencies } = useBooking()

  return (
    <div className="flex justify-center">
      <div className="w-full bg-gray-100 shadow-sm rounded p-3 md:w-[38.75rem]">
        <h3 className="text-blue-900 text-center font-medium">
          Retirada e Devolução
        </h3>
        <div className="mb-4">
          <div className="flex gap-1 items-center mb-2">
            <MapPin size={24} weight="regular" className="fill-blue-900" />
            <span className="text-blue-900 font-medium">Retirada</span>
          </div>
          <SelectAgencyBooking
            agencia={agencyID => actions.setCatchAgency(agencyID)}
          />
          <div className="flex w-full mt-2">
            <SelectDateBooking date={date => actions.setCatchDate(date)} />
            <InputSelectHour frota hour={e => actions.setCatchHour(e)} />
          </div>
        </div>
        <hr className="mb-4 border-gray-300" />
        <div>
          <div className="flex gap-1 items-center mb-2">
            <MapPin size={24} weight="regular" className="fill-blue-900" />
            <span className="text-blue-900 font-medium">Devolução</span>
          </div>
          <SelectAgencyBooking
            agencia={agency => actions.setDeliveryAgency(agency)}
          />
          <div className="flex w-full mt-2">
            <SelectDateBooking date={date => actions.setDeliveryDate(date)} />
            <InputSelectHour frota hour={e => actions.setDeliveryHour(e)} />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <span
            className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center cursor-pointer"
            onClick={handleAgencies}
          >
            Próximo
          </span>
        </div>
      </div>
    </div>
  )
}
