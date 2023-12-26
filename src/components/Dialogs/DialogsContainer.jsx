import { connect } from "react-redux";
import { addMessage } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    dialogsPages: state.dialogs.dialogsPages,
  };
}

const mapDispatchToState = (dispatch) => {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToState)(Dialogs);

export default DialogsContainer;
