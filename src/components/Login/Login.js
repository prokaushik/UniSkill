import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Login/Login.css";

export const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9002/login", user);
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="loginContainer m-5">
      <h1 className="log-head">Login</h1>
      <form onSubmit={login}>
        <div className="loginForm">
          <input
            className="loginfd"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required // Add HTML5 validation
          />
          <input
            className="loginfd"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required // Add HTML5 validation
          />
        </div>
        <div className="log-sign">
          <Button variant="primary" type="submit" className="login-btn">
            Login
          </Button>
          <Button
            variant="primary"
            onClick={() => history.push("/register")}
            className="sign-btn"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

