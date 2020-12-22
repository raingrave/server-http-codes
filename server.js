const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.post('/success', (request, response) => {
  requestLog(request)
  response.status(200)
     .send('response 200')
})

app.post('/success-delay', (request, response) => {
  setTimeout(() => {
    requestLog(request)
    response.status(200)
       .send('response 200')
  }, 60000);
})

app.post('/created', (request, response) => {
  requestLog(request)
  response.status(201)
     .send('response 201')
})

app.post('/created-delay', (request, response) => {
  setTimeout(() => {
    requestLog(request)
    response.status(201)
       .send('response 201')
  }, 60000);
})

app.post('/not-found', (request, response) => {
  requestLog(request)
  response.status(404)
     .send('response 404')
})


app.post('/not-found-delay', (request, response) => {
    setTimeout(() => {
      requestLog(request)
      response.status(404)
         .send('response 404 delayed 60s')
    }, 60000)
})

app.post('/internal-server-error', (request, response) => {
  requestLog(request)
  response.status(500)
     .send('response 500')
})

app.post('/internal-server-error-delay', (request, response) => {
     setTimeout(() => {
        requestLog(request)
        response.status(500)
       .send('response 500 delayed 60s')
    }, 60000)
})

app.get('/', (request, response) => {
  request.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server testing http://localhost:${port}`)
})

const requestLog = (request) => console.log(request.method, `${request.headers.host}${request.url}`)