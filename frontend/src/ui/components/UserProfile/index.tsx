import { Cake, Envelope, MapPin, UserCircle } from '@phosphor-icons/react'
import { IUserProfileProps } from './IUserProfileProps'
import { Button } from '../Button'

export function UserProfile({
  name,
  birthday,
  email,
  andress
}: IUserProfileProps) {
  return (
    <div className="p-3 bg-gray-100 rounded shadow-sm w-full lg:w-[58.75rem]">
      <div className="flex gap-1 items-center">
        <UserCircle size={36} className="fill-white bg-blue-900 rounded-full" />
        <span className="text-gray-700 font-medium md:text-xl">{name}</span>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div>
          <p className="font-medium text-sm text-gray-700 mb-1 md:text-base">
            Nascimento
          </p>
          <div className="flex gap-1 items-center">
            <Cake size={24} className="fill-gray-700" />
            <span className="font-light text-sm">
              {birthday?.split('-').reverse().join('/')}
            </span>
          </div>
        </div>
        <div>
          <p className="font-medium text-sm text-gray-700 mb-1 md:text-base">
            Email
          </p>
          <div className="flex gap-1 items-center">
            <Envelope size={24} className="fill-gray-700" />
            <span className="font-light text-sm">{email}</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-medium text-sm text-gray-700 mb-1 md:text-base">
          Endereço
        </p>
        <div className="flex gap-1 items-center">
          <MapPin size={24} className="fill-gray-700" />
          <span className="font-light text-sm">{andress}</span>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Button destiny="edit-profile" name="editar" />
      </div>
    </div>
  )
}
