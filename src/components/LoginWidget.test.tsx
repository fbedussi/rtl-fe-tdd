import LoginWidget from './LoginWidget'
import {render, screen} from '../test-utils'

test('logged in users see the welcome message', () => {
  render(<LoginWidget/>)
  expect(screen.getByText(/welcome francesco/i))
})