import { Router } from 'express'

import { tasksRouter } from './index.js'

const router = Router()

router.use('/', tasksRouter)

export default router
