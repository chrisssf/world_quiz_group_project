const baseURL = 'http://localhost:3000/api/capitals'

export default {
  getCapitals() {
    return fetch(baseURL)
      .then(res => res.json())
  }
}
