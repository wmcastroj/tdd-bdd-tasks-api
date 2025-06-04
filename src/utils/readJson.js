import { readFile } from 'node:fs/promises'

const readJson = async path => (
  JSON.parse(await readFile(path))
)

export default readJson
