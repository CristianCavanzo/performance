import express from 'express'
import fs from 'fs'
const app = express()
app.use('/public', express.static('public'))
app.use('/dist', express.static('dist'))

app.listen(3000, () => {
  console.log('Server is listening on port: 3000')
})

app.get('/', async (_, res) => {
  const homeFile = fs.readFileSync('./index.html').toString()
  res.writeHead(206, { 'Content-Type': 'text/html' })
  res.write(homeFile)
  res.end()
})
