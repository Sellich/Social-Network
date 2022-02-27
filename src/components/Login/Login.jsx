import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const Login = (props) => {

   const { register, handleSubmit } = useForm()
   const navigate = useNavigate()
   let onSubmit = (value) => {
      props.loginThunk(value.email, value.password, false, false)
   }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   let goToProfile = () => {
      navigate('/profile')
   }

   useEffect(() => {
      if (props.isAuth) {
         goToProfile()
      }
   }, [goToProfile, props.isAuth])

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <label>Login </label>
               <input {...register("email", { required: true })} />
            </div>

            <div>
               <label> Password</label>
               <input type="password" name="password" autoComplete="current-password" {...register("password", { required: true })} />
            </div>
            <input type="submit" />
         </form>
      </div>
   )
}

export default Login