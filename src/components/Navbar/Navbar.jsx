import { Link } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile" className={c.link}>Profile</Link>
        </li>
        <li>
          <Link to="/dialogs" className={c.link}>Dialogs</Link>
        </li>
        <li>
          <Link to="/users" className={c.link}>Users</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
