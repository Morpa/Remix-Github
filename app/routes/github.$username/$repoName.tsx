import { LoaderFunction, useLoaderData } from 'remix'
import { GithubApi, Types } from '~/features/github'
import { Commits } from '~/features/github/components/Commits'

export const loader: LoaderFunction = async ({
  params
}): Promise<Types.Commits.LoaderData> => {
  return {
    user: await GithubApi.getUser(params.username),
    commits: await GithubApi.getCommits(params.reponame, params.username)
  }
}

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong [Commits]</h3>
}

export default function () {
  const { user, commits } = useLoaderData<Types.Commits.LoaderData>()
  return <Commits user={user} commits={commits} />
}
