import { FastifyInstance } from 'fastify'
import { zod } from '../../lib/zod'
import { prisma } from '../../lib/prisma'
import { bcrypt } from '../../lib/bcrypt'

export async function userRoute(server: FastifyInstance) {
  server.addHook('preHandler', async request => {
    await request.jwtVerify()
  })

  server.get('/:id/info', async (request, reply) => {
    const paramSchema = zod.object({
      id: zod.string().uuid()
    })
    const userSchema = zod.object({
      name: zod.string(),
      cpf: zod.string(),
      email: zod.string(),
      gender: zod.string(),
      birthday: zod.string(),
      cep: zod.string(),
      andress: zod.string(),
      neighborhood: zod.string(),
      city: zod.string(),
      state: zod.string(),
      nHouse: zod.string(),
      complement: zod.string()
    })

    const { id } = paramSchema.parse(request.params)

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return userSchema.parse(user)
  })

  server.put('/edit/profile/:id', async (request, reply) => {
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
      complement: zod.string()
    })

    const paramSchema = zod.object({
      id: zod.string()
    })

    const {
      andress,
      birthday,
      cep,
      city,
      complement,
      cpf,
      email,
      gender,
      nHouse,
      name,
      neighborhood,
      state
    } = bodySchema.parse(request.body)
    const { id } = paramSchema.parse(request.params)

    await prisma.user.update({
      where: {
        id
      },
      data: {
        andress,
        birthday,
        cep,
        city,
        complement,
        cpf,
        email,
        gender,
        name,
        neighborhood,
        nHouse,
        state
      }
    })

    return reply.status(200).send('Cadastro atualizado.')
  })

  server.put('/edit/password/:id', async (request, reply) => {
    const bodySchema = zod.object({
      oldPassword: zod.string().min(8),
      newPassword: zod.string().min(8)
    })

    const paramSchema = zod.object({
      id: zod.string()
    })

    const { newPassword, oldPassword } = bodySchema.parse(request.body)
    const { id } = paramSchema.parse(request.params)

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    if (!user) return reply.status(500).send('Usuário não encontrado.')

    const checkOldPass = bcrypt.compareSync(oldPassword, user.password)

    if (!checkOldPass)
      return reply.status(409).send('Senha digitada está errada.')

    const hashPassword = bcrypt.hashSync(newPassword, 10)

    await prisma.user.update({
      where: {
        id
      },
      data: {
        password: hashPassword
      }
    })

    return reply.status(200).send('Senha Atualizada.')
  })
}
