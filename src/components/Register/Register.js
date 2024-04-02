import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Register/Register.css"


 export const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:9002/register", user);
      alert(response.data.message);
      history.push('/login');
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(`Error: ${error.response.data}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert("Network Error: Please check your internet connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("Error registering. Please try again later.");
      }
    }
  };
  

  return (
    <div className="registerContainer m-5">
      <h1>Register</h1>
      <div className="registerForm">
        <input
          className="Reg_input"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          className="Reg_input"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          className="Reg_input"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          className="Reg_input"
          type="password"
          placeholder="Re-enter your password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          onChange={handleChange}
        />
      </div>
      <div className="log-sign">
        <Button className="m-5 w-25 login-btn" variant="primary" onClick={register}>Sign Up</Button>
        <Button className="w-25 sign-btn" variant="primary" onClick={() => history.push('/login')}>Login</Button>
      </div>
    </div>
  );
};
