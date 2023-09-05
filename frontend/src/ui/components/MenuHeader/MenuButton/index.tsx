import { List, X } from '@phosphor-icons/react'
import { useContext } from 'react'
import { menuToggle } from '../../../../data/contexts/MenuToggle/menuToggleContext'
import { userHeaderContext } from '../../../../data/contexts/UserHeader/userHeaderContext'

export function MenuButton() {
  const menuContext = useContext(menuToggle)
  const userContext = useContext(userHeaderContext)
  return (
    <div
      onClick={() => {
        menuContext?.setToggle(!menuContext.toggle)
        userContext?.setUserToggle(false)
      }}
    >
      {menuContext?.toggle ? (
        <X size={32} weight="regular" className="cursor-pointer fill-white" />
      ) : (
        <List
          size={32}
          weight="regular"
          className="cursor-pointer fill-white"
        />
      )}
    </div>
  )
}
