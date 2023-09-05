import logo from '/images/logo.png'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo RentCar" />
      </Link>
    </>
  )
}
