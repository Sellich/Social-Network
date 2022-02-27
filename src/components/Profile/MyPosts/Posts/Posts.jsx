import c from './Posts.module.css'
const Posts = (props) => {
   return (
      <div className={c.item}>
         <div className={c.posts_wrapper}>
            {props.post}
         </div>
      </div>
   )
}
export default Posts