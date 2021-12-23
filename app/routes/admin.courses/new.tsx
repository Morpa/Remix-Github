import { ActionFunction, redirect, useActionData } from 'remix'
import { ZodError } from 'zod'
import { AdminApi } from '~/features/admin'
import { extractValidationErrors } from '~/utils/util'
import { CourseForm } from '~/features/Admin/components/CourseForm'

type FormFields = {
  name?: string
  description?: string
}

export type ActionData = {
  formErrors?: FormFields
  formValues?: FormFields
}

export const action: ActionFunction = async ({
  request
}): Promise<ActionData | Response | void> => {
  const data = Object.fromEntries(await request.formData())

  try {
    await AdminApi.createCourse(data)

    return redirect('.')
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        formErrors: extractValidationErrors(error),
        formValues: {
          name: data.name as string,
          description: data.description as string
        }
      }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    throw new Error(error.message)
  }
}

export default function () {
  const actionData = useActionData<ActionData>()
  return <CourseForm actionData={actionData} />
}
