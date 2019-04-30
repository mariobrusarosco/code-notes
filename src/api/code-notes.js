import axios from 'axios'

const codeNotesAPI = axios.create({
  baseURL: 'https://dev-code-notes.herokuapp.com/api/v1/',
  // headers: {
  //   'x-auth-token': process.env.AUTH_TOKEN
  // }
})

export default codeNotesAPI
