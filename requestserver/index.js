const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()
const port = 3001

app.get('/healthcheck', (req, res) => {
  res.send('Whale hello!')
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log(`Example app listening on port ${port}! Go to https://localhost:${port}/`)
})
