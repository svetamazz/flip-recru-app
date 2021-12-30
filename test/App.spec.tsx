import { render, screen } from '@testing-library/react'
import App from '../pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App planets={[]} />)
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

    render(<App planets={planets} />)
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

    render(<App planets={planets} />)
    expect(screen.getByAltText('planet image')).toBeInTheDocument()
  })
})
