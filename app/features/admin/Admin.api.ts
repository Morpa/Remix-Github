import { Course } from '@prisma/client'
import { db } from '~/utils/db.server'
import { Validator } from '~/utils/util'

export async function getCourses(): Promise<Course[]> {
  return db.course.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  })
}

export async function createCourse(data: unknown): Promise<Course> {
  return db.course.create({
    data: Validator.parse(data)
  })
}
