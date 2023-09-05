import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { jwtPayloadDecoded } from '../../types/jwtPayloadDecoded'

interface BookingUserProps {
  id: string
  bookingCode: string
  carName: string
  catchDate: string
}

export function useBookingList() {
  const [bookings, setBookings] = useState<BookingUserProps[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get('token')
  const decodedToken = jwtDecode<jwtPayloadDecoded>(token)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/booking/${decodedToken.id}/listall`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => setBookings(res.data))
  }, [token])

  return { bookings }
}
