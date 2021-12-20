import { LoaderFunction, useLoaderData } from "remix";

export type User = {
  login: string
  avatar_url: string
  html_url: string
  bio: string
}

export type LoaderData = {
  user: User
}

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`https://api.github.com/users/${params.username}`);

  return {
    user: await response.json(),
  }
}

export default function () {
  const { user } = useLoaderData<LoaderData>()

  return (
    <>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login} width="150" />
    </>
  )
} 