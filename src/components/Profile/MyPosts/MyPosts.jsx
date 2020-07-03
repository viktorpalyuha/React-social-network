import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map( post => <Post message={post.message} likes={post.likes} />);

  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostTextActionCreator(text);
  }

  let onAddPost = () => {
    props.addPostActionCreator();
  }

  return (
    <main className={classes.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } placeholder="Enter your post" value={ props.newPostText }/>
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
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
