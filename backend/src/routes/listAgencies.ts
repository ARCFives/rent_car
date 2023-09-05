import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { zod } from '../lib/zod'
import { Agencies } from '@prisma/client'

export async function listAgenciesRoute(server: FastifyInstance) {
  server.get('/listagency', async (request, reply) => {
    try {
      const agencies = await prisma.agencies.findMany()
      return agencies
    } catch (error) {
      reply.status(500)
      console.error(error)
    }
  })

  server.get('/agencies', async (request, reply) => {
    const paramSchema = zod.object({
      catchID: zod.string(),
      deliveryID: zod.string()
    })

    const { catchID, deliveryID } = paramSchema.parse(request.query)

    const catchAgency = await prisma.agencies.findUnique({
      where: {
        id: catchID
      }
    })

    const deliveryAgency = await prisma.agencies.findUnique({
      where: {
        id: deliveryID
      }
    })

    if (!catchAgency || !deliveryAgency)
      return reply.status(500).send('Internal Server Error')

    return { catchAgency, deliveryAgency }
  })
}
