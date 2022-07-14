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
    setLoggedIn(false);
    // this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
    window.location.href = "/";
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
          <Route
            path="/profile"
            exact
            component={() => <Profile loggedIn={loggedIn} logOut={logOut} />}
          ></Route>
        </Switch>
        <Header handleFormSwitch={handleFormSwitch} />
        {renderForm()}
      </Router>
    </div>
  );
}

export default withRouter(App);
