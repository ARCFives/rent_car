import { createContext } from 'react'

export interface IUserHeaderContext {
  userToggle: boolean
  setUserToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const userHeaderContext = createContext<IUserHeaderContext | undefined>(
  undefined
)
