// server
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const favicon = require('serve-favicon')
const conf = require('../config')

// setup express server
const app = express().disable('x-powered-by')

// access logging
app.use(morgan('tiny'))

// set universal headers
require('./headers')(app, conf)

// set static files
app.use(favicon(path.join(__dirname, '../static/public', 'favicon.ico')))
  .use('/gen', express.static(path.join(__dirname, '../../build')))

// set routes
require('./routes')(app, conf)

// start server listening
const httpserver = app.listen(conf.port, (err) => {
  if (err) console.log(`There was a problem. ${err}`)
  else console.log(`go to: http://localhost:${httpserver.address().port}`)
})
