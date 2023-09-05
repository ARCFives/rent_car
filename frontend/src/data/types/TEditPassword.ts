import { z } from 'zod'
import { schemaEditPassword } from '../schemas/editPassword'

export type TEditPassword = z.infer<typeof schemaEditPassword>
