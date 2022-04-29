import React, { useState } from "react";
import Button from "../button/Button";
import "../suggetionsComp/suggetion.css";

const Suggetion = ({ suggetion }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const changeText = () => {
    console.log("you just clicked");
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="suggetion">
      <img
        className="picture"
        src={`pictures/${suggetion.profilePicture}`}
        alt=""
      ></img>
      <div className="description">
        <h4 className="username">@{suggetion.username}</h4>
        <p className="bio">{suggetion.biography}</p>
      </div>
      <div className="btn-tyle">
        <Button
          onClick={changeText}
          text={isFollowing ? "Following" : "Follow"}
          isFollowing={isFollowing}
        />
      </div>
    </div>
  );
};

export default Suggetion;
