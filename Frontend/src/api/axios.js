// For connecting ReactJS to the backend 
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api',
});
