import { ButtonProps } from './ButtonProps'
import { Link } from 'react-router-dom'

export function ButtonReserva({ link, text }: ButtonProps) {
  return (
    <Link
      to={link}
      className="text-white text-xl uppercase bg-gradient-to-b from-blue-500 to-blue-600 py-2 px-4 rounded
      hover:brightness-125 transition-all duration-300"
    >
      {text}
    </Link>
  )
}
