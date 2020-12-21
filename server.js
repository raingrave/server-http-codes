const express = require('express')
const app = express()
const port = 3000

app.post('/success', (req, res) => {
  res.status(200)
     .send('response 200')
})

app.post('/success-delay', (req, res) => {
  setTimeout(() => {
    res.status(200)
       .send('response 200')
  }, 60000);
})

app.post('/created', (req, res) => {
  res.status(201)
     .send('response 201')
})

app.post('/created-delay', (req, res) => {
  setTimeout(() => {
    res.status(201)
       .send('response 201')
  }, 60000);
})

app.post('/not-found', (req, res) => {
  res.status(404)
     .send('response 404')
})


app.post('/not-found-delay', (req, res) => {
  console.log(req.params)

     setTimeout(() => {
        res.status(404)
       .send('response 404 delayed 60s')
    }, 60000)
})

app.post('/internal-server-error', (req, res) => {
  res.status(500)
     .send('response 500')
})

app.post('/internal-server-error-delay', (req, res) => {
     setTimeout(() => {
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
