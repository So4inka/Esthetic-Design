import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneItem, addItemToTheRoom } from '../services/items';
import './ItemDetail.css';

export default function ItemDetail(props) {
  const [decorItem, setDecorItem] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState('');
  const { id } = useParams();
  const { rooms } = props;

  useEffect(() => {
    console.log(id)
    const fetchDecorItem = async () => {
      const itemData = await getOneItem(id);
      console.log(itemData)
      setDecorItem(itemData);
    };
    fetchDecorItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRoom(value);
  };
  // handle submit for adding room to the item, don't think I need it...
  const handleSubmit = async (e) => {
    e.preventDefault();
    const decorItem = await addItemToTheRoom(selectedRoom, id);
    setDecorItem(decorItem);
  };

  return (
    <div className="show">
      {/* <Link to='/ItemList'>Home Decor</Link> */}
      <div className="item-detail">
        
        <img className="item-image"  src={decorItem?.img_url}
          alt={decorItem?.name} />
          <div className="name">{decorItem?.name}</div>
        <br />
        <div className="description">{decorItem?.description}</div>
        <br />
        <div className="style">Category:{decorItem?.style}</div>
        {/* // Below code is for drop down menu! */}
   

          <form
            className="drop-down"
            onSubmit={handleSubmit}>
            <select onChange={handleChange} defaultValue='default'>
              {/* we can set a default value to tell people to select a room*/}
              {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
              {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
              <option disabled value='default'>
                -- Select the  Room --
              </option>
              {/* now we loop over all rooms and return an <option> tag for each */}

              {rooms.map((room) => (
                // we track the room's id as the "value" which will get added to state onChange
                // the room's name goes between the open and close tag which is what the user sees
                <option value={room.id}>{room.name}</option>
              ))}
            </select>
            <button>Add</button>
          </form>
      </div>
    </div>
 
  );
}