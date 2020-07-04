import React from "react";
import classes from "./Friends.module.css";

const Friends = (props) => {
  debugger;
  let friendsElements = props.sidebar.friendsData.map( (friendsData) => 
    <div className={classes.friendsItem}>
      <img
        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
        alt=""
      />
      {friendsData.name}
    </div>
  );

  return (
    <div className={classes.friends}>
      Friends
        <div className={classes.friendsItems}>
          {friendsElements}
        </div>
    </div>
  );
};

export default Friends;
