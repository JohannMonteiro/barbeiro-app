import api from './axios';

export const getAllBarbers = () => api.get('/barbers');

export const getAllClients = () => api.get('/clients');
