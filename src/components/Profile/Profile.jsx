import c from "./Profile.module.css"
import AboutMe from "./AboutMe/AboutMe";
import Avatar from "./Avatar/Avatar";

import { MyPostsContainerConnect } from "./MyPosts/MyPostsContainer";

import React from "react";
import AboutMeContainer from "./AboutMe/AboutMe";
import Friends from "./Friends/Friends";


const Profile = (props) => {


   return (
      <div className={c.profile}>
         <div className={c.avatar}>
            <Avatar avatar={props.profile.photos.large} updateAvatarThunk={props.updateAvatarThunk} isOwner={props.isOwner} />
         </div>
         <div className={c.aboutMe}>
            <AboutMeContainer
               aboutMe={props.profile.aboutMe}
               fullName={props.profile.fullName}
               lookingForAJob={props.profile.lookingForAJob}
               lookingForAJobDescription={props.profile.lookingForAJobDescription}
               status={props.status}
               updateStatus={props.updateStatus}
               updateProfile={props.updateProfile}
               isOwner={props.isOwner}
               contacts={props.profile.contacts}
            />
         </div>
         <div className={c.friends}>
            <Friends friends={props.friends} />
         </div>
         <div className={c.posts}>
            <MyPostsContainerConnect />
         </div>
      </div >
   )
}



export default Profile