import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.postsData.map( post => <Post message={post.message} likes={post.likes} />);
  let newPostElement = React.createRef();

  let onPostChange = () => {
    props.dispatch( updateNewPostTextActionCreator(newPostElement.current.value) );
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <main className={classes.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    </main>
  );
};

export default MyPosts;
