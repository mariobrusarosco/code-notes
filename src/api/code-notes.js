import axios from 'axios'

// Config
const { API } = APP
const { API_ROOT } = API

const codeNotesAPI = axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
  crossDomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.withCredentials = true
// axios.defaults.crossDomain = true

export default codeNotesAPI
