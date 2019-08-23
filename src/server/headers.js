// headers

module.exports = (app, conf) => {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "0")
    res.setHeader("Vary", "*")
    res.setHeader("Surrogate-Control", "no-store")
    res.setHeader("X-Powered-By", "project 347")
    return next()
  })
}
