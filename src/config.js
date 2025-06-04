import { join } from 'node:path'

const config = {
  port: process.env.PORT,
  hostname: process.env.HOSTNAME,
  database: {
    path: join(process.cwd(), process.env.DATABASE_NAME)
  },
}

export default config
