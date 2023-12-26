import { Link } from "react-router-dom";
import avatar from "../../common/icons/avatar.png";
import c from "./User.module.css";

const User = (props) => {
  return (
    <div className={c.user_wrapper}>
      <div onClick={() => props.userProfileThunk(props.user.id)} className={c.userInfo}>
        <Link to={'/profile/' + props.user.id}>
          <img className={c.avatar} src={props.smallAvatar || avatar} alt="avatar" />
        </Link>
        <div className={c.userName}>
          {props.name}
        </div>
      </div>
      <div className={c.folow_container}>
        <div className={c.userFollow}>
          {props.followed ? <button onClick={() => props.unFollowUser(props.user.id)} className={c.btn}> Unfollow </button>
            : <button className={c.btn} onClick={() => props.followUser(props.user.id)} > Follow </button>}
        </div>
      </div>
    </div>
  )
}

export default User;
