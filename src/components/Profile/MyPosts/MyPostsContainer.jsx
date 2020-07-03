import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      updateNewPostTextActionCreator={onPostChange}
      addPostActionCreator={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  )
};

export default MyPostsContainer; 

