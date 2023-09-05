import { MapPin } from '@phosphor-icons/react'
import { useAgencies } from '../../../../data/hooks/useAgencies/useAgencies'
import { agenciaProps } from './IAgenciaProps'

export function SelectAgencyBooking({ agencia }: agenciaProps) {
  const { agencies } = useAgencies()

  return (
    <div className="relative">
      <select
        className="rounded pr-4 pl-12 font-light text-gray-700 w-full h-10 bg-gray-100 border border-gray-300"
        onChange={e => agencia(e.target.value)}
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
