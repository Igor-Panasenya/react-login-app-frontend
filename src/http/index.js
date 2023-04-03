import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/'

export async function registerUser({username, email, password, file}) {
    try {
        const response = await axios.post('/api/user/register', { username, email, password, image: file });
        return response;
    } catch(err) {
        return err.response;
    }
}

export async function loginUser({email, password}) {
    try {
        const response = await axios.post('/api/user/login', { email, password });
        return response;
    } catch(err) {
        return err.response;
    }
}