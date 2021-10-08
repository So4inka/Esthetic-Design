import api from './config';

export const getAllItems = async () => {
  const resp = await api.get('/items');
  return resp.data;
};

export const getOneItem = async (id) => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
};

export const postItem = async (itemData) => {
  const resp = await api.post('/items', { item: itemData });
  return resp.data;
};

export const deleteItem = async (id) => {
  const resp = await api.delete(`/items/${id}`);
  return resp;
};

export const putItem = async (id, itemData) => {
  const resp = await api.put(`/items/${id}`, { item: itemData });
  return resp.data;
};

export const addItemToTheRoom = async (roomId, id) => {
  const resp = await api.put(`/rooms/${roomId}/items/${id}`);
  return resp.data;
};
