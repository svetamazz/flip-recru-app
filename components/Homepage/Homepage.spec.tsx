import { render, screen } from '@testing-library/react'
import HomePage from './index'

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage planets={[]} />)
    expect(screen.getByRole('heading', { name: 'Planets' })).toBeInTheDocument()
  })

  it('renders planet item in a list', () => {
    const planets = [
      {
        id: '1',
        name: 'Test Planet for Jest',
        image: '/assets/planet-2.jpeg',
      },
    ]

    render(<HomePage planets={planets} />)
    expect(screen.getByText(planets[0].name)).toBeInTheDocument()
  })

  it('renders alt text for planet image', () => {
    const planets = [
      {
        id: '1',
        name: 'Test Planet for Jest',
        image: '/assets/planet-2.jpeg',
      },
    ]

    render(<HomePage planets={planets} />)
    expect(screen.getByAltText(planets[0].name)).toBeInTheDocument()
  })
})
