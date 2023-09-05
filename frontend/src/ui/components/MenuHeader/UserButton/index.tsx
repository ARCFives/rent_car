import { UserCircle } from '@phosphor-icons/react'
import { UserCard } from './UserCard'
import { useContext } from 'react'
import Cookies from 'js-cookie'
import { UserLogin } from './UserLogin'
import { menuToggle } from '../../../../data/contexts/MenuToggle/menuToggleContext'
import { userHeaderContext } from '../../../../data/contexts/UserHeader/userHeaderContext'

export function UserButton() {
  const userContext = useContext(userHeaderContext)
  const menuContext = useContext(menuToggle)
  const token = Cookies.get('token')
  return (
    <div
      className="relative"
      onClick={() => {
        userContext?.setUserToggle(!userContext.userToggle)
        menuContext?.setToggle(false)
      }}
    >
      <UserCircle
        size={40}
        weight="fill"
        className="cursor-pointer fill-white"
      />
      {userContext?.userToggle ? token ? <UserLogin /> : <UserCard /> : null}
    </div>
  )
}
