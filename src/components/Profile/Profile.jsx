import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <main className={classes.content}>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData} 
        newPostText={ props.profilePage.newPostText }
        dispatch={props.dispatch}/>
    </main>
  );
};

export default Profile;
