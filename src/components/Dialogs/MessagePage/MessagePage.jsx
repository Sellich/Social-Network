import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addMessage } from "../../../redux/dialogs_reducer";
import c from "./MessagePage.module.css"

const MessagePage = (props) => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();
   const onSubmit = message => {
      props.addMessage(message)
      reset({ message: '' })
   }
   let messageElement = props.dialogsData.map((data) => <div key={data.id} className={c.message}> {data.message}</div>)
   return (
      <div className={c.chat_wrapper}>
         <div className={c.chat_messages}>
            {messageElement}
         </div>
         <div className={c.inputMessage}>
            <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
               <input defaultValue='Message' {...register("message", { required: true })} className={c.inputMessage} />
               {errors.message && "Message is required"}
               <input type="submit" className={c.submitButton} />
            </form>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      dialogsData: state.dialogs.dialogsData,
   }
}

const mapDispatchToState = (dispatch) => {
   return {
      addMessage: message => dispatch(addMessage(message))
   }
}




const MessagePageContainer = connect(mapStateToProps, mapDispatchToState)(MessagePage);

export default MessagePageContainer