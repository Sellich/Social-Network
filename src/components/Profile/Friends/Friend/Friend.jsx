import { Link } from "react-router-dom"
import avatarIcon from "../../../../common/icons/avatar.png"
import c from "./Friend.module.css"
const Friend = (props) => {

   return (

      <div className={c.friend}>
         <Link to={`/profile/${props.id}`}>
            <div className={c.avatarContainer}>
               <img src={props.avatar ? props.avatar : avatarIcon} alt="avatar" className={c.avatar} />
            </div>
         </Link>
         <div className={c.fullNameConainer}>
            {props.fullName}
         </div>
      </div>
   )
}

export default Friend