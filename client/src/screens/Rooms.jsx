import { Link } from 'react-router-dom';

export default function Rooms(props) {
  return (
    <div>
      <h3>Rooms</h3>
      {props.rooms.map((room) => (
        <div key={room.id}>
          <Link to={`/rooms/${room.id}`}>
            <p>{room.name}</p>
          </Link>
          <Link to={`/rooms/${room.id}/edit`}>
            <button>Change</button>
          </Link>
          <button onClick={() => props.handleRoomDelete(room.id)}>
            Delete
          </button>
        </div>
      ))}
      <Link to='/rooms/new'>
        <button>create</button>
      </Link>
    </div>
  );
}