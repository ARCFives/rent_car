import { FastifyInstance } from 'fastify'
import { zod } from '../../lib/zod'
import { bcrypt } from '../../lib/bcrypt'
import { prisma } from '../../lib/prisma'

export async function loginRoute(server: FastifyInstance) {
  server.post('/oauth/login', async (request, reply) => {
    const bodySchema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(8)
    })

    const { email, password } = bodySchema.parse(request.body)

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) return reply.status(409).send('Email ou senha estão errados.')

    const checkSenha = bcrypt.compareSync(password, user.password)

    if (!checkSenha)
      return reply.status(409).send('Email ou senha estão errados.')

    const token = server.jwt.sign(
      {
        name: user.name,
        id: user.id
      },
      {
        sub: user.id,
        expiresIn: '30 days'
      }
    )

    return {
      token
    }
  })
}
