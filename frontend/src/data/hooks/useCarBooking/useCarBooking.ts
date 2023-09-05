import { useContext } from 'react'
import axios from 'axios'
import { SetActionBooking } from '../../utils/setActionBooking'
import { bookingContext } from '../../contexts/ReservationContext/bookingContext'
import { stepBooking } from '../../contexts/StepsBooking/StepsBookingContext'
import { carListProps } from '../../interfaces/requests'

export function useCarBooking() {
  const booking = useContext(bookingContext)
  const steps = useContext(stepBooking)
  const actions = new SetActionBooking()

  async function handleCar(carID: string) {
    actions.setCar(carID)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const datePickup: string | any = booking?.state.catchDate
    const dateInitial = new Date(datePickup)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dateDelivery: string | any = booking?.state.deliveryDate
    const dateCarDelivery = new Date(dateDelivery)
    const totalDays = dateCarDelivery.getDate() - dateInitial.getDate()

    await axios
      .get(`http://localhost:8080/carlist/${carID}`)
      .then(res => {
        const carInfo: carListProps = res.data
        const totalDiaria = parseFloat(carInfo.priceDiary) * totalDays
        actions.setDiary({
          carName: carInfo.carModel,
          totalBooking: totalDiaria.toFixed(2)
        })
        steps?.setStep(2)
      })
      .catch(e => console.error(e))
  }

  return { handleCar }
}
