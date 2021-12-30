import { render, screen } from '@testing-library/react'
import Planet from '../pages/planet/[id]'

describe('App', () => {
  it('renders planet card component name', () => {
    const planet = {
      id: '1',
      name: 'Test Planet for Jest',
      image: '/assets/planet-2.jpeg',
      climate: '',
      gravity: '',
      orbital_period: 0,
      population: 0,
      rotation_period: 0,
      surface_water: '',
      terrain: '',
    }

    render(<Planet planet={planet} />)
    expect(
      screen.getByRole('heading', { name: planet.name })
    ).toBeInTheDocument()
  })
})
