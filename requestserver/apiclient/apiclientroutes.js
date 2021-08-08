const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('hello world??????')
  res.send('hello????')
  res.end()
})

router.get('/getsaved', (req, res) => {
  console.log('unimplemented')
  res.status(400).send('unimplemented')
  res.end()
})

module.exports = router
