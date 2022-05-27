import axios from 'axios';

const instance = axios.create({
    baseURL: "https://sadbackend-cyt.herokuapp.com",
});

console.log(process.env.baseURL);

export default instance;
