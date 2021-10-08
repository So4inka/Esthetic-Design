import { Link } from 'react-router-dom';


export default function Items(props) {
  return (
    <div>
<Link to='/ItemsList'>Home Decor</Link>
      {props.items.map((item) => (
        <div key={item.id}>
          <Link to={`/items/${item.id}`}>
            {/* <h2>{item.name}</h2> */}
            <img src={item.img_url} />
            {/* <p>{item.description}</p>
            <p>{item.style}</p> */}
          </Link>
          </div>
      ))}
  </div>
 )
}