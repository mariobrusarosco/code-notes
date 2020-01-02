import axios from 'axios'

// Config
const APP = require('../../src/app-configuration.json')
const { API } = APP
const { API_ROOT } = API

const dogAPI = axios.create({
  baseURL: API_ROOT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Client-ID 99147ea30ea26e0229570687a2f023854052912138d3dff8fd22880291b70837'
  }
})

export default dogAPI
