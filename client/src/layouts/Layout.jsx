import {Link} from 'react-router-dom'


export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>LUV Designs</h1>
        <Link to='/login'>Login/Register</Link>
        <hr />
      </header>
      {props.children}
  </div>
)
}