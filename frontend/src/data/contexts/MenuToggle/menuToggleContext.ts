import { createContext } from 'react'

interface MenuToggleContextValue {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const menuToggle = createContext<MenuToggleContextValue | undefined>(
  undefined
)
