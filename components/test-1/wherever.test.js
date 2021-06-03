import { render, screen } from '@testing-library/react'
import { Test } from './Test'

describe('<Test />', () => {
  it('render', () => {
    render(<Test />)
    const exp = screen.getByText('hello')
    expect(exp).toBeInTheDocument('hello')
  })
})
