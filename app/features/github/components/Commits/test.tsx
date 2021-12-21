import { render, screen } from '@testing-library/react'
import { Commits } from '.'

const props = {
  user: {
    login: 'login',
    avatar_url: 'https://avatars3.githubusercontent.com/u/1234?v=4',
    html_url: 'www.google.com',
    bio: 'bio'
  },
  commits: [
    {
      sha: 'sha',
      message: 'hello',
      html_url: 'www.github.com'
    }
  ]
}

describe('Commits', () => {
  it('should render correctly ', () => {
    const { container } = render(<Commits {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Activity' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /view all activity/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the passed props', () => {
    render(<Commits {...props} />)

    expect(
      screen.getByRole('link', {
        name: /login/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: /login/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/hello/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /login/i
      })
    ).toBeInTheDocument()
  })
})
