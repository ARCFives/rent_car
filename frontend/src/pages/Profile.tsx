import { useContext } from 'react'
import { hiddenHeader } from '../data/contexts/HiddenHeader/menuHiddenContext'
import { SubTitleSection } from '../ui/components/SubTitleSection'
import { UserProfile } from '../ui/components/UserProfile'
import { useUserData } from '../data/hooks/useUserData/useUserData'

export function Profile() {
  const hiddenReserva = useContext(hiddenHeader)
  hiddenReserva?.setHiddenReserva(false)
  const { userData } = useUserData()
  return (
    <section>
      <SubTitleSection title="minha conta" />
      <div className="flex justify-center">
        <UserProfile
          name={userData?.name}
          birthday={userData?.birthday}
          email={userData?.email}
          andress={userData?.andress}
        />
      </div>
    </section>
  )
}
