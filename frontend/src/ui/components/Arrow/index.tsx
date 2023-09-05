import { ArrowProps } from './ArrowProps'
import './arrow.css'

export function Arrow({ disabled, left, onClick }: ArrowProps) {
  const disabeld = disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}
