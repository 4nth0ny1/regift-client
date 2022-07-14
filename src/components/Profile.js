import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Profile(props) {
  return (
    <div className="profile">
      <h1>profile page</h1>
      {!props.loggedIn ? (
        <Link to="/">
          <span className="pretty-link">
            <br />
            <button onClick={props.logOut}>Log Out</button>
          </span>
        </Link>
      ) : null}
    </div>
  );
}

export default Profile;
