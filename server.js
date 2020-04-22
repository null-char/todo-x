/* eslint-disable */
const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname))

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server listening on port %d!', this.address().port)
})