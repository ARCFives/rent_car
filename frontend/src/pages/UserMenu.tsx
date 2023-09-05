import { useContext } from 'react'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'
import { Button } from '../ui/components/Button'
import { Car, IdentificationCard } from '@phosphor-icons/react'

export function UserMenu() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(false)

  return (
    <section className="flex flex-col gap-5 items-center">
      <div className="border border-gray-300 rounded p-3 lg:w-[58.75rem] w-full">
        <div className="flex gap-1 items-center">
          <IdentificationCard size={24} className="fill-blue-900" />
          <span className="font-medium text-sm text-gray-700 md:text-base">
            Minha Conta
          </span>
        </div>
        <p className="mt-2 text-xs font-light text-gray-700 md:text-sm">
          Altere cadastro e senha.
        </p>
        <div className="mt-12 flex justify-center">
          <Button destiny="profile" name="editar" />
        </div>
      </div>
      <div className="border border-gray-300 rounded p-3 lg:w-[58.75rem] w-full">
        <div className="flex gap-1 items-center">
          <Car size={24} className="fill-blue-900" />
          <span className="font-medium text-sm text-gray-700 md:text-base">
            Minhas Reservas
          </span>
        </div>
        <p className="mt-2 text-xs font-light text-gray-700 md:text-sm">
          Consulte todas as suas reservas.
        </p>
        <div className="mt-12 flex justify-center">
          <Button destiny="my-reservations" name="consultar" />
        </div>
      </div>
    </section>
  )
}
