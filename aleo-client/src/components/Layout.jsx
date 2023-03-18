import { Outlet } from 'react-router-dom'
import { HeaderMenu as Header, Footer } from './index'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
