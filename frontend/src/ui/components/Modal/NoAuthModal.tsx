import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export function NoAuthModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/25 inset-0 fixed" />
      <Dialog.Content
        className="fixed bg-white w-[16.8rem] p-3 top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 rounded md:w-[32rem]"
      >
        <div className="flex justify-end mb-4">
          <Dialog.Close>
            <X
              size={32}
              className="fill-red-600 hover:bg-gray-200 rounded-full"
            />
          </Dialog.Close>
        </div>
        <Dialog.Description className="text-sm leading-normal font-medium text-gray-700 mb-4 md:text-xl">
          Ops!! Indentificamos que você não está logado, para prosseguir faça
          login ou cadastre-se.
        </Dialog.Description>
        <div className="flex justify-center">
          <Button destiny="login" name="login" />
        </div>
        <div className="flex justify-center">
          <Link
            to="/register"
            className="text-blue-700 hover:text-blue-500 underline font-light text-xs mt-6 md:text-sm"
          >
            Cadastrar-se
          </Link>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
