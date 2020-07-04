import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            updateNewPostTextActionCreator={onPostChange}
            addPostActionCreator={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
