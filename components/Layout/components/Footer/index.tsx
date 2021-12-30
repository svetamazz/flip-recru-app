import Link from 'next/link'

const Footer = () => (
  <footer className="flex-shrink-0 h-16 w-full flex justify-center items-center">
    Made with ❤️ by&nbsp;
    <Link href="https://www.linkedin.com/in/svitlana-matskiv">
      <span className="underline">Svitlana Matskiv</span>
    </Link>
  </footer>
)

export default Footer
