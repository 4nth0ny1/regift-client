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
  Redirect,
} from "react-router-dom";
import About from "./components/About.js";
import Profile from "./components/Profile.js";

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
    setLoggedIn(true);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
  };

  const handleAuthClick = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/user_is_authed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  console.log(user);

  const logOut = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.token = "";
    window.location.href = "/";
  };

  const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleLogin={handleLogin} />;
      // break;
      default:
        return <SignInForm handleLogin={handleLogin} />;
    }
  };
  return (
    <div className="App">
      <h1>reGift</h1>
      <Router>
        <Switch>
          <Route path="/about" exact component={() => <About />} />

          <Route
            path="/profile"
            exact
            component={() => <Profile logOut={logOut} />}
          ></Route>
        </Switch>

        {!loggedIn ? <Header handleFormSwitch={handleFormSwitch} /> : null}
        <p>
          {loggedIn
            ? `Welcome ${user.username}`
            : "login to visit the rest of the site"}
        </p>
        {!loggedIn ? renderForm() : null}

        {loggedIn ? (
          <Link to="/">
            <span className="pretty-link">
              <br />
              <button onClick={logOut}>Log Out</button>
            </span>
          </Link>
        ) : null}
      </Router>
    </div>
  );
}

export default withRouter(App);
