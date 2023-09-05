import { useCarList } from '../../../data/hooks/useCarList/useCarList'
import { SelectCar } from './SelectCar/SelectCar'

export function CarBooking() {
  const { cars } = useCarList()
  return (
    <div>
      {cars.map(car => {
        return (
          <SelectCar
            bagsCount={car.bagsCount}
            carName={car.carModel}
            carPrice={car.priceDiary}
            doorsCount={car.doorsCount}
            gearType={car.gearType}
            imgUrl={car.carImageUrl}
            paxCount={car.paxCount}
            carID={car.id.toString()}
            key={car.id}
          />
        )
      })}
    </div>
  )
}
