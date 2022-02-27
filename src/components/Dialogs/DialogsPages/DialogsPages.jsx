
import { useNavigate } from "react-router-dom"
import avatar from "../../../common/icons/avatar.png"
import c from "./DialogsPages.module.css"


const DialogsPages = (props) => {
   let navigate = useNavigate()
   const onDialogsClick = () => {
      navigate('/dialogs/dialog')
   }

   return (
      <div className={c.dialogsPage} onClick={() => onDialogsClick()}>
         <div className={c.userInfo}>
            <div className={c.userAvatar}>
               <img src={avatar} alt="avatar" className={c.avatar} />
            </div>
            <div className={c.userName}>
               {props.fullName}
            </div>
         </div>
         <div className={c.messageInfo}>
            <div className={c.message}>
               {props.lastMessage}
            </div>
         </div>
      </div>
   )
}

export default DialogsPages;