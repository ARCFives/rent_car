import { CarNameTitleProps } from './CarNameTitleProps'

export function CarNameTitle({ title }: CarNameTitleProps) {
  return (
    <>
      <h3 className="text-xl text-blue-800 text-center font-medium md:text-[1.38rem] lg:text-2xl">
        {title}
      </h3>
    </>
  )
}
