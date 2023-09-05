import { useState } from 'react'
import { menuToggle } from './menuToggleContext'

interface ToggleProps {
  children: string | JSX.Element | JSX.Element[]
}

export function ToogleHamburgerProvider({ children }: ToggleProps) {
  const [toggle, setToggle] = useState(false)

  return (
    <menuToggle.Provider value={{ toggle, setToggle }}>
      {children}
    </menuToggle.Provider>
  )
}
