const express = require('express')
const { sendVote } = require('./api.js')
const { sendVote2 } = require('./api2.js')
const app = express()
const port = 5000

app.use(express.static('public'))

app.get('/api/send',(req, res) => {
  const { variant } = req.query
  if(variant){
    sendVote(variant)
  }
  res.redirect('/?status=ok')
})

app.get('/api/send/employers',(req, res) => {
  const { variant } = req.query
  if(variant){
    sendVote2(variant)
  }
  res.redirect('/employers.html?status=ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
