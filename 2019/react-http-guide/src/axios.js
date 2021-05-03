import Axios from 'axios';

// Create custom axios objects
const newAxios = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

newAxios.defaults.headers.common['Authorization'] = 'NEW AUTH TOKEN';

export default newAxios;