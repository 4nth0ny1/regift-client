import React from "react";

const headerStyle = {
  lineHeight: "15vh",
};
function Header(props) {
  return (
    <div style={headerStyle}>
      <button
        className="ui button"
        onClick={() => props.handleFormSwitch("signUp")}
      >
        Sign Up
      </button>
      <button
        className="ui button"
        onClick={() => props.handleFormSwitch("login")}
      >
        Log In
      </button>
    </div>
  );
}

export default Header;
