const baseURL = 'http://localhost:3000/api/countries'

export default {
  getCountries() {
    return fetch(baseURL)
      .then(res => res.json())
  }
}
