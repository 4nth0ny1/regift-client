import React from "react";
import Gifts from "./Gifts";

function Profile(props) {
  return (
    <div className="profile">
      <h1>welcome to your profile page, {props.user.username}</h1>
      <Gifts />
    </div>
  );
}

export default Profile;
