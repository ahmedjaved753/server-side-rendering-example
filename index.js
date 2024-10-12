const express = require('express')
const { renderToString } = require('react-dom/server')
const React = require('react')
const Button = require('./Button')

const app = express()

app.get('/', function (req, res) {
  const button = React.createElement(Button)
  const html = renderToString(button)
  
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React Button</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `)
})

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
