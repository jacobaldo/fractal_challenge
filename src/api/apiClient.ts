import axios, {AxiosInstance} from 'axios';
import {API_URL} from '@env';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export default apiClient;
