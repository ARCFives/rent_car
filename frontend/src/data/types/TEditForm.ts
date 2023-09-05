import { z } from 'zod'
import { editForm } from '../schemas/editForm'

export type EditFormProps = z.infer<typeof editForm>
