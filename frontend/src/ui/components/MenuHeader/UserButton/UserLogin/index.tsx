import { UserCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { jwtPayloadDecoded } from '../../../../../data/types/jwtPayloadDecoded'

export function UserLogin() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get('token')
  const decoded = jwt_decode<jwtPayloadDecoded>(token)

  function userLogout() {
    Cookies.remove('token')
  }

  return (
    <div className="bg-gray-100 w-72 h-52 absolute z-10 right-0 rounded-lg p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-2">
        <UserCircle size={36} weight="fill" className="fill-blue-900" />
        <p className="text-lg font-medium text-gray-700">Olá, {decoded.name}</p>
      </div>
      <div>
        <a
          href="/"
          className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
          onClick={userLogout}
        >
          Logout
        </a>
      </div>
      <Link
        to="/usermenu"
        className="text-sm font-light underline text-blue-700 hover:text-blue-500 mt-9"
      >
        Meu Perfil
      </Link>
    </div>
  )
}
