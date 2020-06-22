import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
        <div>
            <img src="https://1.bp.blogspot.com/-8h1PgjBKi24/UCM5Cu1podI/AAAAAAAAAAc/GXwOOptiypY/s1600/nature-wallpaper-hd.jpg" alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            avat + descript
        </div>
    </div>
  );
};

export default ProfileInfo;
