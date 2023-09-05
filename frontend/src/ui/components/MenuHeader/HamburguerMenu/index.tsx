import { menuToggle } from '../../../../data/contexts/MenuToggle/menuToggleContext'
import { ButtonReserva } from '../ButtonReserva'
import { HamburguerLink } from './HamburguerLink'
import { HamburguerUserLink } from './HamburguerUserLink'
import { useContext } from 'react'

export function HamburguerMenu() {
  const menuContext = useContext(menuToggle)

  return (
    <div
      className={`absolute bg-blue-900 p-5 top-16 h-96
     w-full flex-col items-center ${
       menuContext?.toggle ? 'flex' : 'hidden'
     } z-20`}
    >
      <div className="flex-1 w-full flex flex-col gap-5">
        <HamburguerUserLink />
        <HamburguerLink link="/reserva" text="Nova Reserva" />
        <HamburguerLink link="/my-reservations" text="Minhas Reservas" />
        <HamburguerLink link="/frota" text="Frota" />
      </div>
      <ButtonReserva link="/reserva" text="Reservar" />
    </div>
  )
}
