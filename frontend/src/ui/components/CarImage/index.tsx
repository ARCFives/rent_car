import { CarImageProps } from './CarImageProps'

export function CarImage({ alt, imgUrl, frota, booking }: CarImageProps) {
  return (
    <div
      className={`w-64 h-44 mb-3 flex items-center justify-center md:w-80 md:h-56 ${
        frota && 'md:w-72 md:h-52'
      } ${booking && 'w-[9.25rem] h-[6.5rem]'}`}
    >
      <img src={imgUrl} alt={`foto ${alt}`} />
    </div>
  )
}
