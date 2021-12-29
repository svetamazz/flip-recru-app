import Link from 'next/link'
import Image from 'next/image'

const Nav = () => (
  <nav className="w-full h-32 flex justify-center items-center">
    <Link href="/" passHref>
      <a role="link" aria-label="Star Wars Planets">
        <Image
          src="/assets/logo.png"
          alt="star wars logo"
          width="200"
          height="80"
        ></Image>
      </a>
    </Link>
  </nav>
)

export default Nav
