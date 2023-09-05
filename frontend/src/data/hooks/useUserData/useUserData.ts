import { useEffect, useState } from 'react'
import axios from 'axios'
import { IUserData } from '../../interfaces/IUserData'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { jwtPayloadDecoded } from '../../types/jwtPayloadDecoded'

export function useUserData() {
  const [userData, setUserData] = useState<IUserData>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token: any = Cookies.get('token')
  const decodedToken = jwtDecode<jwtPayloadDecoded>(token)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${decodedToken.id}/info`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => setUserData(res.data))
  }, [])

  return {
    userData
  }
}
