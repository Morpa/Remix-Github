import { LoaderFunction, redirect } from 'remix'
import { users } from '~/features/Github/components'

export const loader: LoaderFunction = () =>
  redirect(`/github/${users[0].username}`)
