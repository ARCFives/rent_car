import { HiddenReservaProvider } from './data/contexts/HiddenHeader/HiddenReservaProvider'
import { MenuHeaderBookingProvider } from './data/contexts/MenuHeaderBooking/MenuHeaderBookingProvider'
import { ToogleHamburgerProvider } from './data/contexts/MenuToggle/ToggleHamburgerProvider'
import { BookingProvider } from './data/contexts/ReservationContext/BookingProvider'
import { StepsBookingProvider } from './data/contexts/StepsBooking/StepsBookingProvider'
import { UserHeaderProvider } from './data/contexts/UserHeader/UserProvider'
import { Template } from './ui/template/Template'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <StepsBookingProvider>
        <MenuHeaderBookingProvider>
          <BookingProvider>
            <HiddenReservaProvider>
              <ToogleHamburgerProvider>
                <UserHeaderProvider>
                  <BrowserRouter>
                    <Template />
                  </BrowserRouter>
                </UserHeaderProvider>
              </ToogleHamburgerProvider>
            </HiddenReservaProvider>
          </BookingProvider>
        </MenuHeaderBookingProvider>
      </StepsBookingProvider>
    </>
  )
}

export default App
