import React from "react";
import "./form.css";

const handleClick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  alert("Email : " + email + "   " + "Password : " + password);
};

const LoginForm = () => {
  return (
    <div className="Login-container">
      <label htmlFor="email">Email</label>
      <input type="text" placeholder="Enter email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter password" id="password" />
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
