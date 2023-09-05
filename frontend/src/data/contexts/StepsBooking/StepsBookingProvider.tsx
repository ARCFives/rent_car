import { useState } from 'react'
import { stepBooking } from './StepsBookingContext'

interface ProviderProps {
  children: string | JSX.Element | JSX.Element[]
}

export function StepsBookingProvider({ children }: ProviderProps) {
  const [step, setStep] = useState(0)

  return (
    <stepBooking.Provider value={{ step, setStep }}>
      {children}
    </stepBooking.Provider>
  )
}
