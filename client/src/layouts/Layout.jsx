import { Link } from "react-router-dom";
import "./Layout.css";


export default function Layout(props) {
  return (
    <div className='background-layout'>
      <header>
        {/* <h1>LUV Designs</h1> */}
        <div className="logo-home">
            <Link  to="/">
              <img
                src="https://i.imgur.com/UGbIDk3.png"
                alt="logo"
                height="250"
                width="250"
              />
            </Link>
            </div>
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
