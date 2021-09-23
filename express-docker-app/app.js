const express = require('express')
const app = express()
const { SERVICE_NAME: serverName } = process.env

app.get('/', async (req, res, next) => {
  console.log(`/ from ${serverName} called.`)
  res.status(200).send(`Hello World from ${serverName}!`)
})
app.listen(3000, () => console.log(`Server ${serverName} is running on port 3000`))
