import type { ReactNode } from 'react'
import Background from './components/Background'
import Footer from './components/Footer'
import Nav from './components/Nav'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Background />
    <div className="flex-grow flex-shrink-0">
      <Nav />
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
