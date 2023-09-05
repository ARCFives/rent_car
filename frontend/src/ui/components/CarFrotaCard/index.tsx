import { Link } from 'react-router-dom'
import { CarDetails } from '../CarDetails'
import { CarDiaryTitle } from '../CarDiaryTitle'
import { CarImage } from '../CarImage'
import { CarFrotaCardProps } from './CarFrotaCardProps'
import { CarFrotaTitle } from './CarFrotaTitle'

export function CarFrotaCard({
  carName,
  diary,
  imgUrl,
  doorsCount,
  gearType,
  malaCount,
  paxCount
}: CarFrotaCardProps) {
  return (
    <div>
      <div
        className="flex flex-col items-center gap-5 w-80 px-6 py-4 mb-8 shadow-sm bg-gray-100 rounded md:w-[38rem] md:flex-row 
      md:gap-1 lg:w-[48rem] lg:gap-0 lg:justify-between"
      >
        <div>
          <CarFrotaTitle carName={carName} />
          <CarImage alt={carName} imgUrl={imgUrl} frota />
        </div>
        <div>
          <CarDiaryTitle price={diary} />
          <CarDetails
            carDoors={doorsCount}
            gearType={gearType}
            malaCount={malaCount}
            paxCount={paxCount}
          />
          <div className="flex justify-center mt-4">
            <Link
              to="/reserva"
              className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
