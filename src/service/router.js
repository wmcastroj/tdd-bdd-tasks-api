import express from 'express'

import { validate } from '../utils/middlewares/index.js'

import controller from '../controller/controller.js'
import validations from './validations.js'

const router = express.Router({ strict: true })

router.post('/tasks', validate(validations.create), controller.create)

export default router
