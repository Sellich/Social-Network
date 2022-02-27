import { connect } from "react-redux";
import { userProfileThunk, updateAvatarThunk, userStatus, updateStatusThunk, updateProfileThunk, setFriendsThunk } from "../../redux/profile_reducer"

import React from "react";
import { compose } from "redux";
import Profile from "./Profile";
import withRouter from "../../helper/withRouter";


class ProfileContainer extends React.Component {


   refreshProfile() {
      let userId = this.props.params.userId
      if (!userId) {
         userId = this.props.userId
         if (!userId) {
            return setTimeout(() => { this.props.navigate('/login', { replace: true }) }, 0)
         }

      }

      this.props.userProfileThunk(userId)
      this.props.userStatus(userId)
      this.props.setFriendsThunk()
   }

   componentDidMount() {

      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.params.userId !== prevProps.params.userId) {
         this.refreshProfile()
      }
   }

   render() {
      if (!this.props.profile) {
         return (
            <div>
               Loading
            </div>
         )
      }

      return (
         <Profile
            profile={this.props.profile}
            updateAvatarThunk={this.props.updateAvatarThunk}
            status={this.props.status}
            updateStatus={this.props.updateStatusThunk}
            updateProfile={this.props.updateProfileThunk}
            isOwner={!this.props.params.userId}
            friends={this.props.friends}
         />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      profile: state.profile.profile,
      userId: state.auth.userId,
      status: state.profile.status,
      friends: state.profile.friends,
   }
}

export default compose(connect(mapStateToProps,
   {
      userProfileThunk,
      updateAvatarThunk,
      userStatus,
      updateStatusThunk,
      updateProfileThunk,
      setFriendsThunk
   }),
   withRouter)(ProfileContainer);