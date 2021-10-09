import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { getAllRooms, postRoom, deleteRoom, putRoom } from "../services/rooms";
import { getAllItems } from "../services/items";
// import Items from '../screen/Items'
import ItemList from "../screens/ItemList";
import Rooms from '../screens/Rooms';
import RoomCreate from "../screens/RoomCreate";
import RoomEdit from "../screens/RoomEdit";
import ItemDetail from "../screens/ItemDetail";

export default function MainContainer() {
  const [rooms, setRooms] = useState([]);
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchRooms = async () => {
      const roomList = await getAllRooms();
      setRooms(roomList);
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const itemList = await getAllItems();
      setItems(itemList);
    };
    fetchItems();
  }, []);

  const handleRoomCreate = async (roomData) => {
    const newRoom = await postRoom(roomData);
    setRooms((prevState) => [...prevState, newRoom]);
    history.push("/rooms");
  };

  const handleRoomDelete = async (id) => {
    await deleteRoom(id);
    setRooms((prevState) => prevState.filter((roomItem) => roomItem.id !== id));
  };

  const handleRoomUpdate = async (id, roomData) => {
    const updatedRoom = await putRoom(id, roomData);
    setRooms((prevState) =>
      prevState.map((room) => {
        return room.id === Number(id) ? updatedRoom : room;
      })
    );
    history.push("/rooms");
  };

  return (
    <Switch>
      <Route path="/itemList">
        <ItemList items={items} />
      </Route>
      <Route path="/rooms/:id/edit">
        <RoomEdit rooms={rooms} handleRoomUpdate={handleRoomUpdate} />
      </Route>
      <Route path="/items/:id">
        <ItemDetail rooms={rooms} />
      </Route>
      <Route path="/rooms/new">
        <RoomCreate handleRoomCreate={handleRoomCreate} />
      </Route>
      <Route path='/rooms'>
        <Rooms rooms={rooms} handleRoomDelete={handleRoomDelete} />
      </Route>
    </Switch>
  );
}
