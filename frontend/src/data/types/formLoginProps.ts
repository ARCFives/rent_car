import { z } from 'zod'
import { schemaLogin } from '../schemas/login'

export type FormLoginProps = z.infer<typeof schemaLogin>
