import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { zod } from '../lib/zod'

export async function carListRoutes(server: FastifyInstance) {
  server.get('/carlist', async (request, reply) => {
    try {
      const carList = await prisma.models.findMany()
      return carList
    } catch (error) {
      reply.status(500)
      console.error(error)
    }
  })
  server.get('/carlist/:id', async (request, reply) => {
    const paramSchema = zod.object({
      id: zod.string()
    })

    const { id } = paramSchema.parse(request.params)

    const car = await prisma.models.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    return car
  })
}
