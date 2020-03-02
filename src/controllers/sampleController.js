'use strict'

// External Dependancies
const boom = require('boom')
const request = require('request')
// Get Data Models
const { Message } = require('dbschemas')

exports.samplePost = async (req, reply) => {
    return { message: 'Sample post method' }
}

exports.sampleGet = async (req, reply) => {
    return { message: 'Sample get method' }
}
