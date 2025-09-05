import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://codenopsis.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

