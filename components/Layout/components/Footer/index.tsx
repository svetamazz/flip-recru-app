import Link from 'next/link'

const Footer = () => (
  <footer className="flex-shrink-0 h-16 w-full flex justify-center items-center">
    Made with 💛 by&nbsp;
    <Link href="https://www.linkedin.com/in/svitlana-matskiv" passHref>
      <a role="link" aria-label="linkedin">
        <span className="underline">Svitlana Matskiv</span>
      </a>
    </Link>
  </footer>
)

export default Footer
