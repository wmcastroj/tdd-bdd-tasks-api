import { join } from 'node:path'

import { v4 as uuidv4 } from 'uuid';

import config from '../config.js';
import readJson from '../utils/readJson.js'
import writeJson from '../utils/writeJson.js';

const COLLECTION_PATH = join(config.database.path, 'tasks.json')

const create = async payload => {
  const tasks = await readJson(COLLECTION_PATH)
  const id = uuidv4()
  const completed = false;
  const newTask = {
    id,
    ...payload,
    completed,
  }

  tasks.push(newTask)
  await writeJson(COLLECTION_PATH, tasks)
  return newTask
}

const model = {
  create
}

export default model
