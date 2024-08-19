import Axios from 'axios'

const axios = Axios.create({
    baseURL: "localhost:8000",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

// Set the Bearer auth token.
const setBearerToken = (token: string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { axios, setBearerToken }