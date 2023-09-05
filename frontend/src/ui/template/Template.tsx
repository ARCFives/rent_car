import { Footer } from '../components/Footer'
import { MenuHeader } from '../components/MenuHeader'
import { Content } from '../components/Route'

export function Template() {
  return (
    <div className="flex flex-col h-screen">
      <MenuHeader />
      <main className="flex-1 py-7 px-5 md:px-20 lg:px-32">
        <Content />
      </main>
      <Footer />
    </div>
  )
}
