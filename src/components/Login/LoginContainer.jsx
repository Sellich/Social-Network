import React from "react";
import { connect } from "react-redux";
import { logInThunk } from "../../redux/auth_reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return (
      <Login loginThunk={this.props.logInThunk} isAuth={this.props.isAuth} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
};

export default connect(mapStateToProps, { logInThunk })(LoginContainer);