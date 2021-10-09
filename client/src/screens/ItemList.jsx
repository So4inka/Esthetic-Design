
import './ItemList.css';
import { Link } from 'react-router-dom';
// import { Card, Button } from "react-bootstrap";



export default function ItemList(props) {
  return (
  <div className="list">
    <p>Home Decor</p>
      {props.items.map(item => (
        <div key={item.id}>
          <Link to={`/items/${item.id}`}>
          <img src={item.img_url} />
           <h2>{item.name}</h2> 
          
          </Link>
          </div>
      ))}
  </div>
 )
}


