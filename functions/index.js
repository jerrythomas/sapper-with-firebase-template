const functions = require('firebase-functions')
const express = require('express')
const { server } = require('./__sapper__/build/server/server')

const app = express().use(server.middleware())

exports.ssr = functions.https.onRequest((req, res) => {
  req.baseUrl = ''
  app(req, res)
})
