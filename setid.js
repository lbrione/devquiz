import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'url'

function generateId() {
  return crypto.randomBytes(16).toString('hex').slice(0, 25)
}

// Lee el archivo JSON
async function readJsonFile(filePath) {
  try {
    const jsonData = await fs.promises.readFile(filePath)
    return JSON.parse(jsonData)
  } catch (error) {
    console.error('Error reading the JSON file:', error)
    process.exit(1)
  }
}


// Escribe el archivo JSON
async function writeJsonFile(filePath, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2)
    await fs.promises.writeFile(filePath, jsonData)
  } catch (error) {
    console.error('Error writing to the JSON file:', error)
    process.exit(1)
  }
}



// Proceso de agregar un id a cada objeto del JSON
const pathJsonFile = './src/services/quizzes.config.json'
const json = await readJsonFile(pathJsonFile)

json.forEach(elem => {
  elem.id = generateId()
});

writeJsonFile(pathJsonFile, json)
console.log(json)
