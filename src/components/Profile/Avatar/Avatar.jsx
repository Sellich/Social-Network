
import { useForm } from "react-hook-form";
import c from "./Avatar.module.css";

const Avatar = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    props.updateAvatarThunk(e.avatar[0])
  };

  return (
    <div className={c.avatar}>
      <div className={c.avatarContainer}>
        <img src={props.avatar} alt="avatar" className={c.photo} />
      </div>
      {props.isOwner &&
        <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
          <div className={c.formContainer}>
            <label htmlFor="uploadPhoto"> Change Photo</label>
            <input type="file" {...register("avatar")} id="uploadPhoto" className={c.uploadPhoto} />
            <input type="submit" />
          </div>
        </form>}
    </div>
  )
}

export default Avatar;
