import { useContext } from 'react'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'

import { EditForm } from '../ui/components/EditForm'

export function EditProfile() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(true)
  return <EditForm />
}
