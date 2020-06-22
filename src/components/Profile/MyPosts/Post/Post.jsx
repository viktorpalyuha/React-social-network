import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg" />
      {props.message}
      <div>
  <span>like counts: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
