import { useContext } from 'react'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'
import { Button } from '../ui/components/Button'

export function ErrorPage() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(true)
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-6xl text-blue-900 font-bold md:text-9xl">404</h1>
      <p className="text-2xl text-blue-900 font-medium md:text-5xl mb-6">
        Página não encontrada
      </p>
      <Button destiny="" name="Início" />
    </div>
  )
}
