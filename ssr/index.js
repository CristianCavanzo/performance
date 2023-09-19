import express, { response } from 'express'
import { render } from './render.js'
import fs from 'fs'
const app = express()
app.use('/public', express.static('public'))
app.use('/dist', express.static('dist'))

app.listen(3001, () => {
  console.log('Server is listening on port: 3000')
})
app.get('/', async (_, res) => {
  const homeFileBuffer = fs.readFileSync('./index.html')
  const HTMLText = homeFileBuffer.toString()
  const [precontent, postcontent] = HTMLText.split(
    '<div id="ssr-placeholder"></div>'
  )
  res.writeHead(206, { 'Content-Type': 'text/html' })
  res.write(precontent)
  const content = await render()
  res.write(content)
  res.write(postcontent)
  res.end()
})
