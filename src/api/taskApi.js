import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskmanger-backend-5npl.onrender.com/api',
});

export const fetchTasks = () => API.get('/tasks');
export const createTask = (formData) => API.post('/tasks', formData);
export const updateTask = (id, formData) => API.put(`/tasks/${id}`, formData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const markDone = (id) => API.patch(`/tasks/${id}/done`);
