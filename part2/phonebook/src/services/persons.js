import axios from 'axios'

const baseUrl = 'http://127.0.0.1:3001/persons'

const getAll = () => {
  return axios
    .get(`${baseUrl}`)
    .then(response => response.data)
}

const create = (newPerson) => {
  return axios
    .post(`${baseUrl}`, newPerson)
    .then(response => response.data)
}

export {
  getAll,
  create,
}