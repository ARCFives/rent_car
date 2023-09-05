import { Routes, Route } from 'react-router-dom'
import { Home } from '../../../pages/Home'
import { Frota } from '../../../pages/Frota'
import { Register } from '../../../pages/Register'
import { Login } from '../../../pages/Login'
import { Booking } from '../../../pages/Booking'
import { UserMenu } from '../../../pages/UserMenu'
import { PrivateRoute } from './PrivateRoute'
import { Reservations } from '../../../pages/Reservations'
import { Profile } from '../../../pages/Profile'
import { EditProfile } from '../../../pages/EditProfile'
import { ErrorPage } from '../../../pages/ErrorPage'

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frota" element={<Frota />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserva" element={<Booking />} />
        <Route
          path="/usermenu"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-reservations"
          element={
            <PrivateRoute>
              <Reservations />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
