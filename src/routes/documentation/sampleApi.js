const joi = require('joi')
const convert = require('joi-to-json-schema')

const sampleSchema = joi.object({
    name: joi.string()
})

const sampSchema = convert(sampleSchema)

exports.samplePostSchema = {
    description: 'sample swagger schema',
    tags: ['sample'],
    summary: 'sample swagger schema',
    consumes: ['application/x-www-form-urlencoded', 'application/json'],
    body: sampSchema,
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                message: { type: 'string' }
            }
        },
        500: {
            description: 'Internal Server Error',
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            }
        }
    }
}

exports.sampleGetSchema = {
    description: 'sample swagger schema',
    tags: ['sample'],
    summary: 'sample swagger schema',
    consumes: ['application/x-www-form-urlencoded', 'application/json'],
    body: sampSchema,
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                message: { type: 'string' }
            }
        },
        500: {
            description: 'Internal Server Error',
            type: 'object',
            properties: {
                statusCode: { type: 'number' },
                error: { type: 'string' },
                message: { type: 'string' }
            }
        }
    }
}
