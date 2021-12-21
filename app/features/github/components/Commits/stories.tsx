import { Story, Meta } from '@storybook/react/types-6-0'
import { Commits, CommitsProps } from '.'

export default {
  title: 'Components/Commits',
  component: Commits,
  args: {
    user: {
      login: 'testing',
      avatar_url: 'https://avatars3.githubusercontent.com/u/1234?v=4',
      html_url: 'www.google.com',
      bio: 'testing'
    },
    commits: [
      {
        sha: 'string 1',
        message: 'string 1',
        html_url: 'www.github.com'
      },
      {
        sha: 'string 2',
        message: 'string 2',
        html_url: 'www.github.com'
      }
    ]
  }
} as Meta

export const Default: Story<CommitsProps> = (args) => <Commits {...args} />
