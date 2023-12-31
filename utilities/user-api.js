import sendRequest from './send-request'
const BASE_URL = 'https://test-seir0807-pokedex-api.onrender.com/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}