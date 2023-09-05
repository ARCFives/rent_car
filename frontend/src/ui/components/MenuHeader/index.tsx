import { WhatsappLogo } from '@phosphor-icons/react'
import { UserButton } from './UserButton'
import { HeaderReserva } from './HeaderReserva'
import { HamburguerMenu } from './HamburguerMenu'
import { MenuButton } from './MenuButton'
import { Logo } from '../Logo'
import { useContext } from 'react'
import { hiddenHeader } from '../../../data/contexts/HiddenHeader/menuHiddenContext'

export function MenuHeader() {
  const hiddenReserva = useContext(hiddenHeader)
  return (
    <header className="relative">
      <div className="bg-blue-600 h-16 flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2">
          <MenuButton />
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <WhatsappLogo size={32} className="cursor-pointer fill-white" />
          <UserButton />
        </div>
      </div>
      <HeaderReserva hidden={hiddenReserva?.hiddenReserva ? true : false} />
      <HamburguerMenu />
    </header>
  )
}
