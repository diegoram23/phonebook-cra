import axios from "axios";
const baseUrl = 'http://localhost:3002/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
        .then(res => res.data)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
        .then(res => res.data)
}

const deletePerson = (obj) => {
    return axios.delete(`${baseUrl}/${obj}`)
    .then(res => res.data)
}

export default { getAll, create, deletePerson }