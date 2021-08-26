import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-backend15497.herokuapp.com/'
});

export default instance;