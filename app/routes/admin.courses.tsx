import { Course } from '@prisma/client'
import { LoaderFunction, useLoaderData } from 'remix'
import { AdminApi, Courses } from '~/features/admin'

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

  return <Courses courses={courses} />
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not Found!</h3>
