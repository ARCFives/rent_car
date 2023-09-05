import { useContext } from 'react'
import { CardHome } from '../ui/components/CardHome'
import 'keen-slider/keen-slider.min.css'
import { Arrow } from '../ui/components/Arrow'
import { SubTitleSection } from '../ui/components/SubTitleSection'
import { useCarList } from '../data/hooks/useCarList/useCarList'
import { useSlider } from '../data/hooks/useSlider/useSlider'
import { Button } from '../ui/components/Button'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'

export function Home() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(false)
  const { cars } = useCarList()
  const { currentSlide, instanceRef, loaded, sliderRef } = useSlider()
  return (
    <section>
      <SubTitleSection title="Conheça nossa frota" />
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          {cars.map(car => {
            return (
              <CardHome
                key={car.id}
                imgUrl={car.carImageUrl}
                carDiary={car.priceDiary}
                carName={car.carModel}
              />
            )
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div className="mt-5 flex justify-center">
        <Button destiny="frota" name="Confira nossa frota" />
      </div>
    </section>
  )
}
