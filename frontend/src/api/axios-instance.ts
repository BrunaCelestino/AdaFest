import axios from 'axios';

export const axiosConnection = axios.create({
  baseURL: process.env.BASE_URL,
});


