import { CarDiaryTitleProps } from './CarDiaryTitleProps'

export function CarDiaryTitle({ price }: CarDiaryTitleProps) {
  return (
    <>
      <p className="text-gray-700 text-center md:text-lg lg:text-xl">
        Diária{' '}
        <strong className="text-xl text-blue-600 md:text-[1.38rem] lg:text-2xl">
          R$ {price.toString().replace('.', ',')}
        </strong>
      </p>
    </>
  )
}
