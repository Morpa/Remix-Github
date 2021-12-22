import invariant from 'tiny-invariant'
import pick from 'lodash/pick'
import { Types } from '.'
import { secrets } from '../../../secrets'

const config = {
  headers: {
    accept: 'application/vnd.github.v3+json',
    Authorization: `token ${secrets.GITHUB_API_TOKEN}`
  }
}

export const getUser = async (username?: string) => {
  invariant(username, 'Please provide an username as a string')

  const res = await fetch(
    `https://api.github.com/users/${username.toLocaleLowerCase()}`,
    config
  )

  return pick(await res.json(), ['login', 'avatar_url', 'html_url', 'bio'])
}

export const getUserRepos = async (username?: string) => {
  invariant(username, 'Please provide an username as a string')

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  )

  return (await res.json()).map((repo: Types.Repositories.Repo) =>
    pick(repo, [
      'id',
      'full_name',
      'stargazers_count',
      'html_url',
      'language',
      'name'
    ])
  )
}

export const getCommits = async (
  reponame?: string,
  username?: string
): Promise<Types.Commits.Commit[]> => {
  invariant(reponame, 'Please provide an repository name as a string')
  invariant(username, 'Please provide an user name as a string')

  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`,
    config
  )

  return (await res.json()).map((commit: Types.Commits.ApiResponse) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url
  }))
}
