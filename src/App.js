import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import LoginForm from "./components/LoginForm";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import About from "./components/About.js";
import Profile from "./components/Profile.js";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    setLoggedIn(!loggedIn);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
  };

  // const handleAuthClick = () => {
  //   const token = localStorage.getItem("token");
  //   fetch(`http://localhost:3000/user_is_authed`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // };

  console.log(user);
  console.log(loggedIn);

  const logOut = () => {
    setUser({});
    setLoggedIn(!loggedIn);
    localStorage.token = "";
    window.location.href = "/";
  };

  const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleLogin={handleLogin} />;
      default:
        return <SignInForm handleLogin={handleLogin} />;
    }
  };

  const Wrapper = styled.section`
    ${"" /* width: 500px; */}
    box-shadow: 0px 0px 10px 0px grey;
    border-radius: 20px;
    padding: 25px;
    margin: 30px auto;
  `;

  return (
    <div className="App">
      <h1>reGift</h1>
      <Router>
        <Switch>
          <Route path="/about" exact component={() => <About />} />

          <Route
            path="/profile"
            exact
            component={() => <Profile user={user} />}
          />
        </Switch>

        {!loggedIn ? (
          <Wrapper>
            <Header handleFormSwitch={handleFormSwitch} />
            {renderForm()}
          </Wrapper>
        ) : null}

        <Link to="/">
          <span className="pretty-link">
            <br />
            <button onClick={logOut}>Log Out</button>
          </span>
        </Link>
      </Router>
    </div>
  );
}

export default withRouter(App);
