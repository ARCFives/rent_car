import { useEffect, useState } from 'react'
import { carListProps } from '../../interfaces/requests'
import axios from 'axios'

export function useCarList() {
  const [cars, setCars] = useState<carListProps[]>([])
  useEffect(() => {
    axios.get('http://localhost:8080/carlist').then(res => setCars(res.data))
  }, [])

  return {
    cars
  }
}
