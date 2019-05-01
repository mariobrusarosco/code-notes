import axios from 'axios'

const codeNotesAPI = axios.create({
  baseURL: 'http://localhost:9090/api/v1',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
// axios.defaults.crossDomain = true

export default codeNotesAPI
