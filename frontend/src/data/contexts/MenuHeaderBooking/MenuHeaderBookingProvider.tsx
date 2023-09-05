import { useState } from 'react'
import { menuHeaderBooking } from './menuHeaderBookingContext'

interface MenuBoookingProps {
  children: string | JSX.Element | JSX.Element[]
}

export function MenuHeaderBookingProvider({ children }: MenuBoookingProps) {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <menuHeaderBooking.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </menuHeaderBooking.Provider>
  )
}
