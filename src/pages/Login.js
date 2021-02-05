import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoImage from "../assets/images/logo.svg";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function clickLogin(e) {
    history.push("/chat/1");
  }

  return (
    <div className="Login">
      <main>
        <div className="logo">
          <img src={logoImage} alt="logo"></img>
          <div className="brandname">YoChat</div>
        </div>
        <div className="login-info">
          <h2 className="header">Log in</h2>
          <h4 className="subheader">Enter your details below</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="primary"
              disabled={!validateForm()}
              onClick={clickLogin}
            >
              Log in
            </button>
          </form>
        </div>
        <footer>Don’t have an account? Sign Up</footer>
      </main>
    </div>
  );
}
