import Link from 'next/link'
import Meta from '../Layout/components/Meta'
import PlanetCard from '../shared/PlanetCard'
import { HomepageProps } from './types'
import InfiniteScroll from 'react-infinite-scroll-component'
import useHomePage from './Homepage.hook'

const HomePage = (props: HomepageProps) => {
  const { planets, hasMore, fetchData } = useHomePage(props)

  return (
    <>
      <Meta />
      <div className="__app-container ">
        <h1
          className="text-center mb-8 font-black tracking-tight 
        text-3xl xl:text-5xl 2xl:text-6xl"
        >
          Planets
        </h1>
        <InfiniteScroll
          dataLength={planets.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 sm:gap-x-5 lg:gap-x-10 gap-y-6 lg:gap-y-10"
          >
            {planets.map((x) => (
              <Link href={`/planet/${x.id}`} key={x.id} passHref>
                <a role="link" aria-label={`${x.name} Planet`}>
                  <PlanetCard planet={x} />
                </a>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default HomePage
