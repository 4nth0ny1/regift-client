import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignInForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const history = useHistory();

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (username === "" || password === "") {
      setWarning("please enter credentials");
      return;
    }
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        props.handleLogin(data.user);
        if (data.user) {
          history.push("/profile");
        }
      });
    setUsername("");
    setPassword("");
    setWarning("");
  };

  const formDivStyle = {
    margin: "auto",
    padding: "20px",
    width: "80%",
  };

  return (
    <div style={formDivStyle}>
      <h1>Sign Up</h1>
      {warning !== "" ? <p>{warning}</p> : null}
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Username</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
          />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
