const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.post('/success', (request, response) => {
  this.requestLog(request)
  res.status(200)
     .send('response 200')
})

app.post('/success-delay', (request, res) => {
  setTimeout(() => {
    this.requestLog(request)
    res.status(200)
       .send('response 200')
  }, 60000);
})

app.post('/created', (request, res) => {
  this.requestLog(request)
  res.status(201)
     .send('response 201')
})

app.post('/created-delay', (request, res) => {
  setTimeout(() => {
    this.requestLog(request)
    res.status(201)
       .send('response 201')
  }, 60000);
})

app.post('/not-found', (request, res) => {
  this.requestLog(request)
  res.status(404)
     .send('response 404')
})


app.post('/not-found-delay', (request, res) => {
    setTimeout(() => {
      this.requestLog(request)
      res.status(404)
         .send('response 404 delayed 60s')
    }, 60000)
})

app.post('/internal-server-error', (request, res) => {
  this.requestLog(request)
  res.status(500)
     .send('response 500')
})

app.post('/internal-server-error-delay', (request, res) => {
     setTimeout(() => {
        this.requestLog(request)
        res.status(500)
       .send('response 500 delayed 60s')
    }, 60000)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server testing http://localhost:${port}`)
})

const requestLog = (request) => console.log(request.method, `${request.headers.host}${req.url}`)