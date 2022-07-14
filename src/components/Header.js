import React from "react";

const headerStyle = {
  // add headerstyles here  in this format
  // flexDirection: "row",
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
