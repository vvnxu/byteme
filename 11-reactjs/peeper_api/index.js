var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/api/peeps', (req, res) => {
  res.json(['trump','sux','cucumber'])
})

app.listen(5000)