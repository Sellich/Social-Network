import { Link } from "react-router-dom";
import Friend from "./Friend/Friend";
import c from "./Friends.module.css"
const Friends = (props) => {


   const friends = props.friends.map((friend) => <Friend id={friend.id} fullName={friend.name} key={friend.id} avatar={friend.photos.small} />)
   return (
      <div className={c.friendsInfo}>
         <div className={c.friendsContainer}>
            {friends}
         </div>
      </div>
   )
}

export default Friends;