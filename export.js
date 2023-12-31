import { render } from './ssr/render.js'
import fs from 'fs'

/**
 * This process will generate static HTML with our content pre-rendered.
 * Yes, this is what Gatsby, NextJS and the whole JAMStack
 * is based on :)
 */
async function exportHtml() {
  const homeFileBuffer = fs.readFileSync('./index.template.html')
  const htmlText = homeFileBuffer.toString()
  const [precontent, postcontent] = htmlText.split(
    '<div id="ssr-placeholder"></div>'
  )

  const content = await render()

  const html = `
  <!-- this file was statically generated :) -->
  ${precontent}
  ${content}
  ${postcontent}
    `

  fs.writeFileSync('index.html', html)

  console.log('\n🚀 index.html successfully generated')
}

// Run
exportHtml()
