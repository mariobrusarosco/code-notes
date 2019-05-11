import axios from 'axios'

// Config
const {
  APP_URL,
  API: { API_ROOT }
} = process.env.APP

console.log(process.env.APP)

const codeNotesAPI = axios.create({
  baseURL: `${APP_URL}/${API_ROOT}`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.withCredentials = true
// axios.defaults.crossDomain = true

export default codeNotesAPI
