import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import jwt from '@fastify/jwt'
import { resolve } from 'node:path'
import { carListRoutes } from './routes/carList'
import { listAgenciesRoute } from './routes/listAgencies'
import { registerRoute } from './routes/auth/register'
import { loginRoute } from './routes/auth/login'
import { bookingRoute } from './routes/booking/booking'
import { userRoute } from './routes/user/user'

const server = fastify()

server.register(multipart)
server.register(require('@fastify/static'), {
  root: resolve(__dirname, '../public/images/modelos'),
  prefix: '/files/modelos'
})
server.register(jwt, {
  secret: '95sg4gsdv6dgf71bg6ha1svsfdh'
})

server.register(cors, {
  origin: true
})

server.register(carListRoutes)
server.register(listAgenciesRoute)
server.register(registerRoute)
server.register(loginRoute)
server.register(bookingRoute)
server.register(userRoute)

server
  .listen({ port: 8080 })
  .then(() => console.log('backend running http://localhost:8080/'))
