import { render, screen, within } from '@testing-library/react'
import Home from '../../pages'

it('(pages) Home snap shot', () => {
  const tree = render(<Home />)
  expect(tree).toMatchSnapshot()
})

it('(pages) Home integration', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  expect(main.getByText('Hello Next.js')).toBeInTheDocument()
})
