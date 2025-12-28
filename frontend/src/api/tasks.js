import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1/tasks';

export const getAllTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (name) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const getTask = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await axios.patch(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
