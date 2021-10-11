import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
    <div className="navbar">
      <header>
        <div className="logo-home">
          <Link to="/">
            <img
              src="https://i.imgur.com/UGbIDk3.png"
              alt="logo"
              height="250"
              width="250"
            />
          </Link>
        </div>
        <div className="nav-right">
         {props.currentUser ? (
          <div>
            <p>Welcome,{props.currentUser.username}</p>
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
        </div>
      </header>
      {props.children}
    </div>
     {/* <footer className="footer">
     <div className="footer-images">
            <a className="footer-image-github" href="https://github.com/So4inka">
            <img src="https://i.imgur.com/JMMrIY8.png" />
            </a>
            <a className="footer-image-linkedin" href="https://www.linkedin.com/in/nadezda-kallaur-65444a85/">
           <img src="https://i.imgur.com/h6bqRF4.png" />
           </a>
           <a className="footer-image-insta" href="https://www.instagram.com/nadia_kallaur/">
            <img src="https://i.imgur.com/hfTC5IA.png" />
           </a>
           <a  className="footer-image-fb" href="https://www.facebook.com/nadune4ka/">
           <img src="https://i.imgur.com/YbHVUfT.png" />
           </a>
       </div> 
      </footer> */}
      </>
  );
}

