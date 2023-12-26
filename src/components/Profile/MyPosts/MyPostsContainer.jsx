
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
  return (
    <div>
      <MyPosts postsData={props.postsData} addPost={props.onAddPost} />
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
};

const mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData
  }
};

export const MyPostsContainerConnect = connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
