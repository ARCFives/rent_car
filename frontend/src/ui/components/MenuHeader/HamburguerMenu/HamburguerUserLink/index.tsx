import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { menuToggle } from '../../../../../data/contexts/MenuToggle/menuToggleContext'

export function HamburguerUserLink() {
  const menuContext = useContext(menuToggle)
  const token = Cookies.get('token')
  return (
    <>
      {token ? (
        <Link
          to="/usermenu"
          className="text-xl text-white hover:text-blue-400 transition-all duration-300 block font-medium"
          onClick={() => menuContext?.setToggle(!menuContext.toggle)}
        >
          Minha conta
        </Link>
      ) : (
        <Link
          to="/login"
          className="text-xl text-white hover:text-blue-400 transition-all duration-300 block font-medium"
          onClick={() => menuContext?.setToggle(!menuContext.toggle)}
        >
          Cadastrar-se / Login
        </Link>
      )}
    </>
  )
}
