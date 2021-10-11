import { Link } from 'react-router-dom';
import './Rooms.css'
import { Button } from "react-bootstrap";


export default function Rooms(props) {
  return (
    <div className='show-room'>
    <h3>Rooms</h3>
      {props.rooms.map((room) => (
        <div
          className='room-detail'
          key={room.id}>
          <Link to={`/rooms/${room.id}`}>
            <p>{room.name}</p>
          </Link>
          <Link to={`/rooms/${room.id}/edit`}>
            <Button>Change</Button>
          </Link>
          <Button onClick={() => props.handleRoomDelete(room.id)}>
            Delete
          </Button>
        </div>
      ))}
      <Link to='/rooms/new'>
        <Button>create</Button>
      </Link>
    </div>
  );
}