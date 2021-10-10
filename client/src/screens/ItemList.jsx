
import './ItemList.css';
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";



export default function ItemList(props) {
  return (
    <div className="list">
      <h3>Home Decor</h3>
      {props.items.map((item) => (
        <div key={item.id}>
         <Card style={{ width: "20rem" }}>
          <Link to={`/items/${item.id}`}>
         <Card.Img variant="top" src={item.img_url} />
         <Card.Title>{item.name}</Card.Title>
         <Card.Body>
          </Card.Body>
          </Link>
        </Card>
        </div>     
     ))}
   </div>
 )
}


