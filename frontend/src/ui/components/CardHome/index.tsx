import { CarDiaryTitle } from '../CarDiaryTitle'
import { CarImage } from '../CarImage'
import { CarNameTitle } from '../CarNameTitle'
import { CardHomeProps } from './CardHomeProps'

export function CardHome({ carDiary, carName, imgUrl }: CardHomeProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center keen-slider__slide">
      <CarImage imgUrl={imgUrl} alt={carName} />
      <div>
        <CarNameTitle title={carName} />
        <CarDiaryTitle price={carDiary} />
      </div>
    </div>
  )
}
