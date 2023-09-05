import { useCarBooking } from '../../../../data/hooks/useCarBooking/useCarBooking'
import { CarDiaryTitle } from '../../CarDiaryTitle'
import { CarImage } from '../../CarImage'
import { CarNameTitle } from '../../CarNameTitle'
import { CarDataBooking } from './CarDataBooking'
import { selectCarProps } from './selectCarProps'

export function SelectCar({
  bagsCount,
  carName,
  carPrice,
  doorsCount,
  gearType,
  imgUrl,
  paxCount,
  carID
}: selectCarProps) {
  const { handleCar } = useCarBooking()

  return (
    <div className="flex justify-center">
      <div className="shadow-sm flex bg-gray-100 w-[21.13rem] rounded p-5 mb-6 md:mb-12 md:w-[36.25rem]">
        <div className="flex flex-col justify-between">
          <CarImage alt={carName} imgUrl={imgUrl} booking />
          <CarDiaryTitle price={carPrice} />
        </div>
        <div className="flex-1">
          <CarNameTitle title={carName} />
          <CarDataBooking
            gear={gearType}
            doorsCount={doorsCount}
            paxCount={paxCount}
            bagsCount={bagsCount}
          />
          <div className="flex justify-center mt-5">
            <button
              className=" text-white py-2 px-3 rounded uppercase bg-gradient-to-b from-blue-800 to-blue-900 hover:brightness-125 transition-all duration-300 text-center"
              onClick={() => {
                handleCar(carID)
              }}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
