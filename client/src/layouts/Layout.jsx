import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>LUV Designs</h1>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
        <hr />
        {props.currentUser && (
          <div>
            <Link to="/itemList">Home Decor</Link>
            <Link to="/rooms">Rooms</Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
