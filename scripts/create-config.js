import fs from 'fs'
import config from '../config'

const data = JSON.stringify(config())

fs.writeFile('./src/app-configuration.json', data, err => {
  if (err) {
    console.log(
      `-- [ CREATE CONFIG ERROR ] -- Error when creating project's JSON configuration`
    )
    throw err
  }
  console.log(
    `-- [ CREATE CONFIG SUCCESS ] -- Project's JSON configuration created at src/`
  )
})
