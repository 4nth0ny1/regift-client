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

function App() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState("");

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
          // console.log(data)
        });
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
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
    // this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
  };

  const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleLogin={handleLogin} />;
        break;
      default:
        return <SignInForm handleLogin={handleLogin} />;
    }
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" exact component={() => <About />} />
          <Route path="/profile" exact component={() => <Profile />}></Route>
        </Switch>
        <Header handleFormSwitch={handleFormSwitch} />
        {renderForm()}
        {user && (
          <Link to="/profile">
            <button onClick={handleAuthClick} className="ui button">
              Access Authorized Route
            </button>
          </Link>
        )}
        <span className="pretty-link">
          <br />
          <button onClick={logOut}>Log Out</button>
        </span>
      </Router>
    </div>
  );
}

export default withRouter(App);
