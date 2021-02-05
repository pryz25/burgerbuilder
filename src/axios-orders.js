import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-3a943-default-rtdb.firebaseio.com/'
})

export default instance;