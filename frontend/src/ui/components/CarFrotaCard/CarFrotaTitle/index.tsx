interface CarFrotaTitleProps {
  carName: string
}

export function CarFrotaTitle({ carName }: CarFrotaTitleProps) {
  return (
    <>
      <h3 className="font-bold text-xl text-blue-800 text-center md:text-2xl">
        {carName}
      </h3>
    </>
  )
}
