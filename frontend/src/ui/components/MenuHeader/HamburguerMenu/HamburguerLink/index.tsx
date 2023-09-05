import { useContext } from 'react'
import { HamburguerLinkProps } from './HamburguerLinkProps'
import { Link } from 'react-router-dom'
import { menuToggle } from '../../../../../data/contexts/MenuToggle/menuToggleContext'

export function HamburguerLink({ link, text }: HamburguerLinkProps) {
  const menuContext = useContext(menuToggle)
  return (
    <>
      <Link
        to={link}
        className="text-xl text-white hover:text-blue-500 transition-all duration-300 block font-medium"
        onClick={() => menuContext?.setToggle(!menuContext?.toggle)}
      >
        {text}
      </Link>
    </>
  )
}
