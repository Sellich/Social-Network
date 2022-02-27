
import DialogsPages from "./DialogsPages/DialogsPages";


const Dialogs = (props) => {
   let dialogsPages = props.dialogsPages.map((page) => <DialogsPages key={page.id}
      fullName={page.fullName}
      lastMessage={page.lastMessage} />)

   return (
      <div>
         <div>
            {dialogsPages}
         </div>

      </div>
   )
}

export default Dialogs;