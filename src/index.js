'use strict'

const fastify = require('fastify')({ logger: true })
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const oas = require('fastify-oas')

const swagger = require('./config/swagger')
const routes = require('./routes')

fastify.use(cors())

fastify.register(oas, swagger.options)
fastify.register(require('fastify-formbody'))

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(
            process.env.PORT || 3001,
            process.env.HOST || '127.0.0.1'
        )
        fastify.oas()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
