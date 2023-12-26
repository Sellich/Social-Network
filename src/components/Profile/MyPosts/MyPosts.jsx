import { useForm } from "react-hook-form";
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = post => {
    props.addPost(post)
    reset({ postText: '' })
  };

  let postElements = props.postsData.map((data) => 
    <div key={data.id} className={c.postItem}> 
      {data.postText} 
    </div>
  );

  return (
    <div className={c.postsArea}>
      <div className={c.createPosts}>
        <div>
          <h1>Create New Post</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue='Post Text'
              {...register('postText')}
              className={c.input}
            />
            <input type="submit" className={c.submitbtn} />
          </form>
        </div>
      </div>
      <div className={c.posts}>
        <Posts post={postElements} />
      </div>
    </div>
  )
}

export default MyPosts;
