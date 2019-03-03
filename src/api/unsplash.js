import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 99147ea30ea26e0229570687a2f023854052912138d3dff8fd22880291b70837'
  }
})
