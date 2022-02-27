import React from "react";
import { connect } from "react-redux";
import { Router, Routes, Route, BrowserRouter, Outlet } from "react-router-dom"
import { authAPI } from "./API/API";
import c from './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MessagePageContainer from "./components/Dialogs/MessagePage/MessagePage";
import MessagePage from "./components/Dialogs/MessagePage/MessagePage";
import Header from './components/Header/Header';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import ProfileContainerParams from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/Users"
import { initialazedApp } from "./redux/app_reducer";


function App() {
   return (
      <div className={c.app_wrapper}>
         <div className={c.app_wrapper__header}>
            <HeaderContainer />
         </div>
         <div className={c.app_wrapper__navbar}>
            <Navbar />
         </div>
         <div className={c.app_wrapper__content}>
            <Outlet />
         </div>
      </div>
   )
}

class AppContainer extends React.Component {

   catchAllUnhandledError = () => {
      alert("Some error occured")
   }

   componentDidMount() {
      this.props.initialazedApp()
      window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
   }

   componentWillUnmount() {
      window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
   }

   render() {
      if (!this.props.initialized) {
         return (
            <div>
               LOADING
            </div>
         )
      }
      return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<App />}>
                  <Route path="dialogs" element={<DialogsContainer />} />
                  <Route path="dialogs/dialog" element={<MessagePageContainer />} />
                  {/*<Route path="/profile" element={<Profile />} />*/}
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/" element={<ProfileContainerParams />}></Route>
                  <Route path="/profile" element={<ProfileContainerParams />}>
                     <Route path=":userId" element={<ProfileContainerParams />} />
                     <Route path="" element={<ProfileContainerParams />} />
                  </Route>
                  <Route path="/login" element={<LoginContainer />} />
               </Route>
            </Routes>
         </BrowserRouter >
      )
   }
}


const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized,
   }
}

export default connect(mapStateToProps, { initialazedApp })(AppContainer);
