import React from "react";
import { connect } from "react-redux";
import Header from "./Header";


class HeaderContainer extends React.Component {


   render() {

      return (
         <Header login={this.props.login} isAuth={this.props.isAuth} />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, {})(HeaderContainer)