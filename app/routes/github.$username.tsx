import { LoaderFunction, useLoaderData } from 'remix'
import { GithubApi, GithubContainer, LoaderData } from '~/features/github'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await GithubApi.getGithubUser(params.username)
  }
}

export function ErrorBoundary() {
  return <h3>Whoops! 💣</h3>
}

export default function () {
  const { user }: LoaderData = useLoaderData()
  return <GithubContainer user={user} />
}
