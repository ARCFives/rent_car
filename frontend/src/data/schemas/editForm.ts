import { z } from 'zod'
import { verifyCPF } from '../utils/verifyCPF'
import { isAdult } from '../utils/isAdult'

export const editForm = z.object({
  name: z
    .string()
    .min(3, 'O nome precisa ter ao menos 3 caracteres')
    .max(45, 'Nome muito grande, por favor use menos que 45 caracteres'),
  cpf: z
    .string()
    .regex(/[0-9]{11}/, 'CPF inválido, digite um CPF válido.')
    .refine((field: string) => !verifyCPF(field), 'CPF inválido'),
  email: z.string().email('Digite um email válido.').toLowerCase(),
  gender: z.string(),
  cep: z.string().regex(/[0-9]{8}/, 'CEP digitado errado ou não existe.'),
  andress: z.string().min(2, 'Nome da rua é necessário.'),
  neighborhood: z.string().min(2, 'Informe seu bairro'),
  city: z.string().min(2, 'Informe sua cidade.'),
  state: z
    .string()
    .nonempty('Informe seu estado.')
    .min(2, 'Informe o Uf do seu estado.'),
  nHouse: z.string(),
  complement: z.string(),
  birthday: z
    .string()
    .regex(
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
      'Data inválida.'
    )
    .refine(
      (field: string) => isAdult(field.split('/').reverse().join('-')),
      'Você precisar ser de maior para se cadastrar.'
    )
})
