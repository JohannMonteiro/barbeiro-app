import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://172.19.48.1:3333/'
  baseURL: 'http://192.168.15.11:3333/'
})

export type ApiResponse = {
  data: any;
  status: number;
}

export default api