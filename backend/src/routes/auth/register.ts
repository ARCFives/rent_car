import { FastifyInstance } from 'fastify'
import { zod } from '../../lib/zod'
import { bcrypt } from '../../lib/bcrypt'
import { prisma } from '../../lib/prisma'

export async function registerRoute(server: FastifyInstance) {
  server.post('/oauth/register', async (request, reply) => {
    const bodySchema = zod.object({
      name: zod.string().min(3),
      cpf: zod.string(),
      email: zod.string().email(),
      gender: zod.string(),
      birthday: zod.string(),
      cep: zod.string(),
      andress: zod.string(),
      neighborhood: zod.string(),
      city: zod.string(),
      state: zod.string(),
      nHouse: zod.string(),
      complement: zod.string(),
      password: zod.string().min(8)
    })

    const {
      cep,
      cpf,
      andress,
      neighborhood,
      city,
      complement,
      email,
      gender,
      nHouse,
      name,
      birthday,
      password,
      state
    } = bodySchema.parse(request.body)

    const userEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    const userCPF = await prisma.user.findUnique({
      where: {
        cpf
      }
    })

    if (userCPF) return reply.status(409).send('CPF já cadastrado.')

    if (userEmail)
      return reply.status(409).send('Endereço de email já cadastrado.')

    const hashPassword = bcrypt.hashSync(password, 10)

    await prisma.user.create({
      data: {
        andress,
        neighborhood,
        cep,
        city,
        cpf,
        email,
        gender,
        name,
        birthday,
        state,
        complement,
        nHouse,
        password: hashPassword
      }
    })

    reply.status(201).send('Conta criada com sucesso')
  })
}
