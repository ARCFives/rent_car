import { FastifyInstance } from 'fastify'
import { zod } from '../../lib/zod'
import { prisma } from '../../lib/prisma'
import { randomCode } from '../../lib/randomCode'

export async function bookingRoute(server: FastifyInstance) {
  server.addHook('preHandler', async request => {
    await request.jwtVerify()
  })

  server.post('/booking/create', async (request, reply) => {
    const bodySchema = zod.object({
      catchAgency: zod.string(),
      catchLocation: zod.string(),
      catchDate: zod.string(),
      catchHours: zod.string(),
      deliveryAgency: zod.string(),
      deliveryLocation: zod.string(),
      deliveryDate: zod.string(),
      deliveryHours: zod.string(),
      totalBooking: zod.string(),
      carName: zod.string(),
      userID: zod.string()
    })

    const {
      carName,
      catchAgency,
      catchDate,
      catchHours,
      catchLocation,
      deliveryAgency,
      deliveryDate,
      deliveryHours,
      deliveryLocation,
      totalBooking,
      userID
    } = bodySchema.parse(request.body)

    const bookingCode: string = randomCode()

    const hasCode = await prisma.booking.findUnique({
      where: {
        bookingCode
      }
    })

    if (hasCode)
      return reply.status(500).send('Tente novamente ocorreu um erro.')

    await prisma.booking.create({
      data: {
        bookingCode,
        carName,
        catchAgency,
        catchDate,
        catchHours,
        catchLocation,
        deliveryAgency,
        deliveryDate,
        deliveryHours,
        deliveryLocation,
        totalBooking,
        userID
      }
    })

    reply.status(201).send('Reserva concluída.')
  })

  server.get('/booking/:id/listall', async (request, reply) => {
    const paramSchema = zod.object({
      id: zod.string().uuid()
    })

    const { id } = paramSchema.parse(request.params)

    const reservations = await prisma.booking.findMany({
      where: {
        userID: id
      }
    })

    return reservations
  })
}
