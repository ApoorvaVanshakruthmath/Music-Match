// LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform basic validation (you might want to add more)
    if (username.trim() === "" || password.trim() === "") {
      console.error("Please enter both username and password.");
      return;
    }

    // Simulate successful login by passing the username to the parent component
    onLogin(username);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="log" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
