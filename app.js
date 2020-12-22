const express = require('express')

const server = express()

server.use(express.static(__dirname + '/public'))

server.use((req, res, next) => {
    res.redirect('/')
})

server.listen(3000, () => {
    console.log('listening to port: 3000')
})