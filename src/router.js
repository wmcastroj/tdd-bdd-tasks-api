import { Router } from 'express'

import { tasksRouter } from './domains/tasks/index.js'

const router = Router()

router.use('/', tasksRouter)

export default router
