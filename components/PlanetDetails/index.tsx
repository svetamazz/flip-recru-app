import { EnhancedPlanet } from '@/lib/models/planet'

interface IProps {
  planet: EnhancedPlanet
}

const PlanetDetails = ({ planet }: IProps) => {
  return (
    <div
      className="ml-6 bg-white text-black opacity-80 rounded p-5 lg:p-8 w-full 
        text-base sm:text-lg mt-4 sm:mt-0"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-3 sm:mb-4">
        {planet.name}
      </h1>
      {planet.population && <p>Population: {planet.population}</p>}
      {planet.climate && <p>Climate: {planet.climate}</p>}
      {planet.gravity && <p>Gravity: {planet.gravity}</p>}
      {planet.rotation_period && (
        <p>Rotation period: {planet.rotation_period}</p>
      )}
      {planet.surface_water && <p>Surface water: {planet.surface_water}</p>}
      {planet.orbital_period && <p>Orbital period: {planet.orbital_period}</p>}
      {planet.terrain && <p>Terrain: {planet.terrain}</p>}
    </div>
  )
}

export default PlanetDetails
