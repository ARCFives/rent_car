import { useState } from 'react'
import { userHeaderContext } from './userHeaderContext'

interface ToogleProps {
  children: string | JSX.Element | JSX.Element[]
}

export function UserHeaderProvider({ children }: ToogleProps) {
  const [userToggle, setUserToggle] = useState(false)

  return (
    <userHeaderContext.Provider value={{ userToggle, setUserToggle }}>
      {children}
    </userHeaderContext.Provider>
  )
}
