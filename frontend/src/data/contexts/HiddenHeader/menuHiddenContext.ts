import { createContext } from 'react'

interface HiddenHeaderContextValue {
  hiddenReserva: boolean
  setHiddenReserva: React.Dispatch<React.SetStateAction<boolean>>
}

export const hiddenHeader = createContext<HiddenHeaderContextValue | undefined>(
  undefined
)
