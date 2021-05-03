import './index.css';
import App from './App';
import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    
    return requestConfig;
}, error => {
    console.log(error);

    return Promise.reject(error);
});

Axios.interceptors.response.use(responseConfig => {
    console.log(responseConfig);
    
    return responseConfig;
}, error => {
    console.log(error);

    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
