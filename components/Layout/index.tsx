import type { ReactNode } from 'react'
import Background from './components/Background'
import Footer from './components/Footer'
import Meta from './components/Meta'
import Nav from './components/Nav'

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => (
  <>
    <Meta />
    <Background />
    <div className="flex-grow flex-shrink-0">
      <Nav />
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
