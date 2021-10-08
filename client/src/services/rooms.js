import api from './config';

export const getAllRooms = async () => {
  const resp = await api.get('/rooms');
  return resp.data;
};

export const getOneRoom = async (id) => {
  const resp = await api.get(`/rooms/${id}`);
  return resp.data;
};

export const postRoom = async (roomData) => {
  const resp = await api.post('/rooms', { room: roomData });
  return resp.data;
};

export const deleteRoom = async (id) => {
  const resp = await api.delete(`/rooms/${id}`);
  return resp;
};

export const putRoom = async (id, roomData) => {
  const resp = await api.put(`/rooms/${id}`, { room: roomData });
  return resp.data;
};

