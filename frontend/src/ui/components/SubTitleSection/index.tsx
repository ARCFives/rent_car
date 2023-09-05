import { SubTitleSectionProps } from './SubTitleSectionProps'

export function SubTitleSection({ title }: SubTitleSectionProps) {
  return (
    <h2 className="text-blue-800 text-2xl uppercase font-bold mb-6 text-center lg:text-3xl">
      {title}
    </h2>
  )
}
