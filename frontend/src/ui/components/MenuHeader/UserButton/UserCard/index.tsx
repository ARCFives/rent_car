import { UserCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Button } from '../../../Button'

export function UserCard() {
  return (
    <div className="bg-gray-100 w-72 h-52 absolute z-10 right-0 rounded-lg p-5 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-2">
        <UserCircle size={36} weight="fill" className="fill-blue-900" />
        <p className="text-lg font-medium text-gray-700">
          Faça login ou cadastre-se
        </p>
      </div>
      <div>
        <Button destiny="login" name="login" />
      </div>
      <Link
        to="/register"
        className="text-sm font-light underline text-blue-700 hover:text-blue-500 mt-9"
      >
        Cadastre-se
      </Link>
    </div>
  )
}
