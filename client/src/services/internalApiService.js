import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllGroups = async () => {
  const res = await http.get('/groups');
  return res.data;
};

export const getGroupById = async (id) => {
  const res = await http.get(`/groups/${id}`);
  return res.data;
};

export const createGroup = async (data) => {
  const res = await http.post('/groups', data);
  return res.data;
};

export const updateGroupById = async (id, data) => {
  const res = await http.put(`/groups/${id}`, data);
  return res.data;
};

export const deleteGroupById = async (id) => {
  const res = await http.delete(`/groups/${id}`);
  return res.data;
};

// Users

export const createUser = async (data) => {
  const res = await http.post('/users', data);
  return res.data;
}

export const getAllUsers = async () => {
  const res = await http.get('/users');
  return res.data;
};

export const getUserById = async (id) => {
  const res = await http.get(`/users/${id}`);
  return res.data;
};

export const updateUserById = async (id, data) => {
  const res = await http.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUserById = async (id) => {
  const res = await http.delete(`/users/${id}`);
  return res.data;
};