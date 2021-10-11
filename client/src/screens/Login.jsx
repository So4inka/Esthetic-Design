import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '', 
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="auth">
      <form className="form"
        onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}>
      <h3>Login</h3>
      <label className="user-info">
        Username:
    <input
    type='text'
    name='username'
    value={formData.username}
    onChange={handleChange}
    />
        </label>
        <br />
      <label className="password-info">
      Password:
    <input
    type='password'
    name='password'
    value={formData.password}
    onChange={handleChange}
    />
      </label>
      <br />
      <Link to='/register'>Register</Link>
      <button className='btn'>Submit</button>
    </form>
    </div>
  )
}


















