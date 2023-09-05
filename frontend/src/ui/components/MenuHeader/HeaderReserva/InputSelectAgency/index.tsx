import { MapPin } from '@phosphor-icons/react'
import { useAgencies } from '../../../../../data/hooks/useAgencies/useAgencies'
import { agenciaProps } from '../../../Booking/SelectAgencyBooking/IAgenciaProps'
import { useContext } from 'react'
import { menuHeaderBooking } from '../../../../../data/contexts/MenuHeaderBooking/menuHeaderBookingContext'

export function InputSelectAgency({ agencia, menuAgency }: agenciaProps) {
  const { agencies } = useAgencies()
  const menuBooking = useContext(menuHeaderBooking)

  return (
    <div className="relative">
      <select
        className="h-12 rounded pr-4 pl-12 font-light text-gray-700 w-full border-0"
        onChange={e => {
          agencia(e.target.value)
          menuAgency ? menuBooking?.setActiveMenu(true) : null
        }}
      >
        <option selected hidden value="">
          Selecione o local de retirada
        </option>
        {agencies.map(agency => {
          return (
            <option value={agency.id} key={agency.id}>
              {agency.agencyName}
            </option>
          )
        })}
      </select>
      <MapPin
        size={28}
        weight="fill"
        className="absolute top-2 left-2 fill-blue-900"
      />
    </div>
  )
}
