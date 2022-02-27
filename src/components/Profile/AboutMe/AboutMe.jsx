import { useState } from "react";
import { useForm } from "react-hook-form";
import c from "./AboutMe.module.css"
import correct from "../../../common/icons/correct.png"
import wrong from "../../../common/icons/remove.png"

const AboutMe = (props) => {

   const [statusEditMode, setStatusEditMode] = useState(false)
   const { register, handleSubmit } = useForm()
   const onSubmit = data => {
      props.updateStatus(data.status)
      setStatusEditMode(false)
   }
   const contact = Object.keys(props.contacts).map((key) => <div key={key} > {key} </div>)
   return (
      <div className={c.aboutMeContainer}>

         <div className={c.fullName}>{props.fullName} </div>
         {statusEditMode ? <form onSubmit={handleSubmit(onSubmit)}><input {...register("status")} /> <input type="submit" /></form> :
            <div onDoubleClick={() => setStatusEditMode(true)} className={c.status}>{props.status}</div>}

         <div className={c.aboutMe}>
            <p className={c.headerAboutMe}>About Me</p>
            <div >

               Contacts: <div className={c.contacts}>{contact}</div>
            </div>
            <div>
               Looking For A Job: {props.lookingForAJob ? <img src={correct} alt="yes" className={c.lookingForAJobImg} /> : <img src={wrong} alt="yes" className={c.lookingForAJobImg} />}
            </div>
            <div>
               {props.lookingForAJob && <div>  Looking For A Job Descripton: {props.lookingForAJobDescription} </div>}
            </div>
         </div>
         {props.isOwner && <button onClick={() => props.goToEditMode()}>
            EDIT MODE
         </button>}
      </div>
   )
}


const ProfileEditMode = (props) => {

   const { register, handleSubmit } = useForm()


   return (
      <div>
         <form onSubmit={handleSubmit(props.onSubmit)}>
            <label>Full Name</label>
            <input {...register("FullName")} defaultValue={props.fullName} />
            <label> Looking For A job Description</label>
            <input {...register("LookingForAJobDescription")} defaultValue={props.lookingForAJobDescription} />
            <label> About Me</label>
            <input {...register("AboutMe")} defaultValue={props.aboutMe} />
            <label>Looking For A Job: </label>
            <select {...register("LookingForAJob")}>
               <option value={true}>
                  YES
               </option>
               <option value={false}>
                  NO
               </option>
            </select>
            <input {...register('Contacts')} />
            <input type="submit" />
         </form>
      </div>
   )
}


const AboutMeContainer = (props) => {

   const [editMode, setEditMode] = useState(false)
   const onSubmit = (data) => {
      props.updateProfile(data).then(
         setEditMode(false))
   }

   return (
      <div>
         {editMode ? <ProfileEditMode
            onSubmit={onSubmit}
            fullName={props.fullName}
            lookingForAJob={props.lookingForAJob}
            lookingForAJobDescription={props.lookingForAJobDescription}
            aboutMe={props.aboutMe}
            contacts={props.contacts}
         />
            :
            <AboutMe aboutMe={props.aboutMe}
               fullName={props.fullName}
               lookingForAJob={props.lookingForAJob}
               lookingForAJobDescription={props.lookingForAJobDescription}
               status={props.status}
               updateStatus={props.updateStatus}
               onSubmit={onSubmit}
               goToEditMode={() => setEditMode(true)}
               isOwner={props.isOwner}
               contacts={props.contacts}
            />}
      </div>
   )

}

export default AboutMeContainer;