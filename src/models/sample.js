'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = require('mongodb').ObjectID

const sampleSchema = new mongoose.Schema({})

module.exports = mongoose.model('Schema', sampleSchema)
