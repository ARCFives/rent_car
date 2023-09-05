import { useState } from 'react'
import { hiddenHeader } from './menuHiddenContext'

interface ToogleProps {
  children: string | JSX.Element | JSX.Element[]
}

export function HiddenReservaProvider({ children }: ToogleProps) {
  const [hiddenReserva, setHiddenReserva] = useState(false)

  return (
    <hiddenHeader.Provider value={{ hiddenReserva, setHiddenReserva }}>
      {children}
    </hiddenHeader.Provider>
  )
}
