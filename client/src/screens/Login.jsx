import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="auth">
      <form
        className="form-login"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
      >
        <p>Login</p>
        <label className="user-info">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="password-info">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <Link to="/register">Register</Link>
        <Button variant="submit">Submit</Button>
      </form>
    </div>
  );
}
