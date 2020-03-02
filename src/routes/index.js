'use strict'

const sampleController = require('../controllers/sampleController')
const documentation = require('./documentation/sampleApi')

const routes = [
    {
        method: 'POST',
        url: '/api/sample',
        handler: sampleController.samplePost,
        schema: documentation.samplePostSchema
    },
    {
        method: 'GET',
        url: '/api/sample',
        handler: sampleController.sampleGet,
        schema: documentation.sampleGetSchema
    }
]

module.exports = routes
