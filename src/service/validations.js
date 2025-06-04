import { REQUEST_SEGMENTS } from '../utils/index.js'
import {Create } from '../repository/schema.js'

const validations = {
  create: {
    [REQUEST_SEGMENTS.BODY]: Create
  },
}

export default validations
