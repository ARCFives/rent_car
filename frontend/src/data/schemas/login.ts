import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().email('Digite um email válido.').toLowerCase(),
  password: z.string().min(8, 'O mínimo são 8 caracteres')
})
