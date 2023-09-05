import { SubTitleSection } from '../ui/components/SubTitleSection'
import { CarFrotaCard } from '../ui/components/CarFrotaCard'
import { useContext } from 'react'
import { useCarList } from '../data/hooks/useCarList/useCarList'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'

export function Frota() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(false)
  const { cars } = useCarList()

  return (
    <section>
      <SubTitleSection title="Nossa Frota" />
      <div className="flex flex-col items-center justify-center">
        {cars.map(car => {
          return (
            <CarFrotaCard
              carName={car.carModel}
              diary={car.priceDiary}
              doorsCount={car.doorsCount}
              gearType={car.gearType}
              imgUrl={car.carImageUrl}
              malaCount={car.bagsCount}
              paxCount={car.paxCount}
              key={car.carModel}
            />
          )
        })}
      </div>
    </section>
  )
}
