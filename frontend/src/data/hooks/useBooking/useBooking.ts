import { useContext } from 'react'
import axios, { AxiosError } from 'axios'
import { IAgencyListProps } from '../../interfaces/agencyList'
import { SetActionBooking } from '../../utils/setActionBooking'
import { bookingContext } from '../../contexts/ReservationContext/bookingContext'
import { stepBooking } from '../../contexts/StepsBooking/StepsBookingContext'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { jwtPayloadDecoded } from '../../types/jwtPayloadDecoded'
import { useNavigate } from 'react-router-dom'
import { menuHeaderBooking } from '../../contexts/MenuHeaderBooking/menuHeaderBookingContext'

interface ISetAgencies {
  catchAgency: IAgencyListProps
  deliveryAgency: IAgencyListProps
}

export function useBooking() {
  const booking = useContext(bookingContext)
  const steps = useContext(stepBooking)
  const headerBooking = useContext(menuHeaderBooking)
  const actions = new SetActionBooking()
  const token = Cookies.get('token')
  const navigate = useNavigate()

  async function handleAgencies() {
    const hourPickup = parseInt(booking?.state.catchHours)
    const Day = new Date()
    const dateNow = Day.toLocaleDateString().split('/').reverse().join('-')
    const hourNow = Day.getHours()
    if (
      booking?.state.catchAgencyID === '' ||
      booking?.state.deliveryAgencyId === ''
    )
      return window.alert('Verifique se você escolheu as agências.')

    if (booking?.state.catchDate === '' || booking?.state.deliveryDate === '')
      return window.alert('Verifique se escolheu uma data correta.')

    if (booking?.state.catchDate === booking?.state.deliveryDate)
      return window.alert(
        'Verifique a data de entrega, apenas um dia após a data de retirada.'
      )

    if (booking?.state.catchHours === '' || booking?.state.deliveryHours === '')
      return window.alert('Verifique se escolheu um horário.')

    if (booking?.state.catchDate === dateNow) {
      if (hourPickup < hourNow)
        return window.alert(
          'Horário indisponível para retirada, tente um horário mais tarde.'
        )
    }
    if (token) {
      const decoded = jwtDecode<jwtPayloadDecoded>(token)
      actions.setUserID(decoded.id)
    }

    await axios
      .get(
        `http://localhost:8080/agencies?catchID=${booking?.state.catchAgencyID}&deliveryID=${booking?.state.deliveryAgencyId}`
      )
      .then(response => {
        const agencies: ISetAgencies = response.data
        actions.setAgencies({
          catchAgency: agencies.catchAgency.agencyName,
          catchLocation: agencies.catchAgency.agencyAndress,
          deliveryAgency: agencies.deliveryAgency.agencyName,
          deliveryLocation: agencies.deliveryAgency.agencyAndress
        })
      })
      .catch(e => console.error(e))
      .finally(() => steps?.setStep(1))
  }

  async function handleMenuAgencies() {
    const hourPickup = parseInt(booking?.state.catchHours)
    const Day = new Date()
    const dateNow = Day.toLocaleDateString().split('/').reverse().join('-')
    const hourNow = Day.getHours()
    if (
      booking?.state.catchAgencyID === '' ||
      booking?.state.deliveryAgencyId === ''
    )
      return window.alert('Verifique se você escolheu as agências.')

    if (booking?.state.catchDate === '' || booking?.state.deliveryDate === '')
      return window.alert('Verifique se escolheu uma data correta.')

    if (booking?.state.catchDate === booking?.state.deliveryDate)
      return window.alert(
        'Verifique a data de entrega, apenas um dia após a data de retirada.'
      )

    if (booking?.state.catchHours === '' || booking?.state.deliveryHours === '')
      return window.alert('Verifique se escolheu um horário.')

    if (booking?.state.catchDate === dateNow) {
      if (hourPickup < hourNow)
        return window.alert(
          'Horário indisponível para retirada, tente um horário mais tarde.'
        )
    }
    if (token) {
      const decoded = jwtDecode<jwtPayloadDecoded>(token)
      actions.setUserID(decoded.id)
    }

    await axios
      .get(
        `http://localhost:8080/agencies?catchID=${booking?.state.catchAgencyID}&deliveryID=${booking?.state.deliveryAgencyId}`
      )
      .then(response => {
        const agencies: ISetAgencies = response.data
        actions.setAgencies({
          catchAgency: agencies.catchAgency.agencyName,
          catchLocation: agencies.catchAgency.agencyAndress,
          deliveryAgency: agencies.deliveryAgency.agencyName,
          deliveryLocation: agencies.deliveryAgency.agencyAndress
        })
      })
      .catch(e => console.error(e))
      .finally(() => {
        steps?.setStep(1)
        navigate('/reserva')
      })
  }

  function editBooking(step: number) {
    steps?.setStep(step)
  }

  async function handleConfirmBooking() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const response = await axios
      .post('http://localhost:8080/booking/create', booking?.state, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((e: AxiosError) => {
        console.error(e)
      })

    window.alert(response.data)
    steps?.setStep(0)
    actions.setResetBooking()
    headerBooking?.setActiveMenu(false)
    navigate('/')
  }

  return {
    handleAgencies,
    editBooking,
    handleConfirmBooking,
    handleMenuAgencies
  }
}
