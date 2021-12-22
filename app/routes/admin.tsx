import { Course } from '@prisma/client'
import { LoaderFunction, useLoaderData } from 'remix'
import { AdminApi } from '~/features/admin'

type LoaderData = {
  courses: Course[]
}

export const loader: LoaderFunction = async () => {
  return {
    courses: await AdminApi.getCourses()
  }
}

export default function () {
  const { courses } = useLoaderData<LoaderData>()

  return (
    <>
      <h1>Curses</h1>
      {courses.map((course) => (
        <p key={course.id}>{course.name}</p>
      ))}
    </>
  )
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not Found!</h3>

/* export const action: ActionFunction = async ({ request, params }) => {
  return {}
} */
