import { useContext } from 'react'
import { RegisterForm } from '../ui/components/RegisterForm'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'

export function Register() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(true)
  return (
    <div className="md:flex md:justify-center">
      <RegisterForm />
    </div>
  )
}
