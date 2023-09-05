import { z } from 'zod'
import { schemaForm } from '../schemas/register'

export type FormProps = z.infer<typeof schemaForm>
