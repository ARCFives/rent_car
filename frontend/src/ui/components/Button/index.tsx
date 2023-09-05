import { Link } from 'react-router-dom'
import { IButtonProps } from './IButtonProps'

export function Button({ destiny, name }: IButtonProps) {
  return (
    <>
      <Link
        to={`/${destiny}`}
        className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
      >
        {name}
      </Link>
    </>
  )
}
