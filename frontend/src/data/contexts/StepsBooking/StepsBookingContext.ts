import { createContext } from 'react'

interface StepsBookingContextProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export const stepBooking = createContext<StepsBookingContextProps | undefined>(
  undefined
)
