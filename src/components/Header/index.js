// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
