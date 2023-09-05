import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

interface PrivateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: string | JSX.Element | JSX.Element[] | any
}

export function PrivateRoute({ children }: PrivateProps) {
  const token = Cookies.get('token')

  return token ? children : <Navigate to="/login" />
}
