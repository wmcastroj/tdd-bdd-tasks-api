import express from 'express'
import helmet from 'helmet'

import router from './router.js'


export const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(helmet())

app.use('/', router)

export default app
