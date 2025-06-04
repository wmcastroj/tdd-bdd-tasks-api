import { StatusCodes } from 'http-status-codes'

import model from '../model/model.js'

const create = async (req, res) => {
  try {
    const task = await model.create(req.body)

    return res.status(StatusCodes.CREATED).json({ task })
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const controller = {
    create
}

export default controller
