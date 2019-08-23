// init config
const node_env = process.env.NODE_ENV || 'prod'
const isDev = node_env.toLowerCase() === 'dev' ? true : false
const port = (isDev) ? 3000 : 8000
const liveJsPort = 3001
const liveJsPath = `http://localhost:${liveJsPort}`


module.exports = { isDev, port, liveJsPath, liveJsPort }
