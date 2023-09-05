import { useEffect, useState } from 'react'
import axios from 'axios'
import { IAgencyListProps } from '../../interfaces/agencyList'

export function useAgencies() {
  const [agencies, setAgencies] = useState<IAgencyListProps[]>([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/listagency')
      .then(res => setAgencies(res.data))
  }, [])

  return {
    agencies
  }
}
