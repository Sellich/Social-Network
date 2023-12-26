import { Link } from 'react-router-dom';
import c from './Header.module.css'
import universeIcon from './images/icon.png'

const Header = (props) => {
  return (
    <div className={c.header_wrapper}>
      <div className={c.icon}>
        <img src={universeIcon} alt="universe" className={c.networkIcon} />
      </div>
      <div>
        <span className={c.h1}>UNIVERSE-NETWORK</span>
      </div>
      <div className={c.auth}>
        {props.isAuth ? <div className={c.userName}> {props.login} </div> : <div><Link to="/login">Log In</Link></div>}
      </div>
    </div>
  )
}

export default Header;
