import {useState} from 'react'

export default function RoomCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleRoomCreate(formData);
    }}>
      <h3>Create Room/Place</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
    </form>
  );
}