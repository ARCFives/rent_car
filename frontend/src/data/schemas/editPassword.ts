import { z } from 'zod'

export const schemaEditPassword = z
  .object({
    oldPassword: z
      .string()
      .nonempty('Insira sua senha atual.')
      .min(8, 'Mínimo de 8 caracteres'),
    newPassword: z.string().min(8, 'Mínimo de 8 caracteres'),
    confirmPassword: z.string()
  })
  .refine(fields => fields.newPassword === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais.'
  })
