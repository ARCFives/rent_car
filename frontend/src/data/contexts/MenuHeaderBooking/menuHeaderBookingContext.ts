import { createContext } from 'react'

interface MenuHeaderBookingContextValue {
  activeMenu: boolean
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const menuHeaderBooking = createContext<
  MenuHeaderBookingContextValue | undefined
>(undefined)
