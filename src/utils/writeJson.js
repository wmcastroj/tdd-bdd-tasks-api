import { writeFile } from 'node:fs/promises'

const writeJson = async (path, data) => {
  writeFile(path, JSON.stringify(data, null, 2))
}

export default writeJson
