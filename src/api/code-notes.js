import axios from 'axios'

const codeNotesAPI = axios.create({
  baseURL: 'http://localhost:9090/api/v1/notes',
  headers: {
    'x-auth-token': process.env.AUTH_TOKEN
  }
})

export default codeNotesAPI
