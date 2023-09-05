import { DeviceMobile, Phone } from '@phosphor-icons/react'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer>
      <section className="bg-blue-300 px-3 py-8 flex gap-9 items-center justify-center md:px-20 md:gap-0 md:justify-around">
        <div className="flex items-center gap-1">
          <DeviceMobile
            size={58}
            weight="regular"
            className="bg-blue-900 rounded-full p-2 fill-white"
          />
          <p className="text-blue-900 font-medium w-24 text-xs md:text-sm md:w-28">
            Assistência 24H 0 800 000 2022
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Phone
            size={58}
            weight="regular"
            className="bg-blue-900 rounded-full p-2 fill-white"
          />
          <p className="text-blue-900 font-medium w-28 text-xs md:text-sm md:w-32">
            Central de reservas 0 800 000 2022
          </p>
        </div>
      </section>
      <section className="bg-blue-600 p-3">
        <Logo />
        <p className="font-medium text-xs text-white">
          RentCar S/A | CNPJ/MF nº 04.227.019/0001-26
        </p>
        <p className="font-light text-xs text-white">
          Sede: Avenida Presidente Vargas, n° 377 -CEP: 21.000-000 - Rio de
          Janeiro - RJ
        </p>
        <p className="text-white font-light text-xs">
          &copy; RentCar S/A | Todos os direitos reservados.
        </p>
      </section>
    </footer>
  )
}
