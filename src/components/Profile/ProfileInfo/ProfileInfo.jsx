import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
        <div>
            <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
        </div>
        <div className={classes.descriptionBlock}>
            avat + descript
        </div>
    </div>
  );
};

export default ProfileInfo;
