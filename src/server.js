import 'dotenv/config';
import app from './app.js'
import config from './config.js'

const port = config.port
const hostname = config.hostname

app.listen(port, hostname, () => {
  console.info(`Listening on ${hostname}:${port}`)
})
