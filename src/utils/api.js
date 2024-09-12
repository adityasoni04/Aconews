import axios from 'axios'

const API_BASE_URL = 'https://gnews.io/api/v4'
const API_KEY = '34b63e3c4e444582367c9f38102db817'

export const fetchNews = async (category, country) => {
  const response = await axios.get(`${API_BASE_URL}/top-headlines`, {
    params: {
      category,
      country,
      token: API_KEY,
      max: 20,
    },
  })
  return response.data
}

export const searchNews = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/search`, {
    params: {
      q: query,
      token: API_KEY,
      max: 20,
    },
  })
  return response.data
}