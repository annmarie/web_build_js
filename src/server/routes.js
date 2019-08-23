// routes
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

module.exports = (app, conf) => {
  // set request parsers
  app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(fileUpload())

  // render robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
  })

  // all other pages
  // TODO: make this a template
  app.get("*", (req, res) => {
    const AppBundleJsPath = (conf.isDev) ? conf.liveJsPath : '/gen'
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>App</title>
      </head>
      <body>
        <div id="app-container"></div>
        <script src="${AppBundleJsPath}/app.bundle.js"></script>
      </body>
      </html>
    `)
    res.end()
  })


}
