import axios from 'axios'

const instance = axios.create({
  baseURL: "https://backend-galbubeshi.herokuapp.com",
  withCredentials: true,
});

export default instance
