import { useState } from "react";
import "./RoomCreate.css";
import { Button } from "react-bootstrap";

export default function RoomCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h3>Create Room/Place</h3>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRoomCreate(formData);
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button>Submit</Button>
      </form>
    </>
  );
}
