import Link from 'next/link'

interface PlanetBreadcrumbsProps {
  planetName: string
}

const PlanetBreadcrumbs = ({ planetName }: PlanetBreadcrumbsProps) => {
  return (
    <div className="text-lg sm:text-xl tracking-[5px] sm:tracking-[12px]">
      <Link href="/" passHref>
        <a
          role="link"
          aria-label="Home"
          className="text-yellow-300 text-opacity-90"
        >
          Home
        </a>
      </Link>
      {' / '}
      <span className="">{planetName}</span>
    </div>
  )
}

export default PlanetBreadcrumbs
