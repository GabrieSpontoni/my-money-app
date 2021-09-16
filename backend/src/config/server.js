const port = 3003 
const express = require('express')
const allowCors = require('./cors')
const server = express();
const queryParser = require('express-query-int')


server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use(allowCors)
server.use(queryParser())

 
server.listen(port , function() {
  console.log(`Backend running on port ${port}.`)
})

module.exports = server
