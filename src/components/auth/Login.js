import React, { useState } from "react";
import axios from "axios";

function Login({ handleAuth, setToken }) {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  function submitLogin(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/auth/login", {
        email: email,
        password: password
      })
      .then(({ data }) => {
        handleAuth();
        setToken(data.token);
      })
      .catch(errors => {
        console.log(errors);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={event => setPassword(event.target.value)}
        />

        <button onClick={event => submitLogin(event)}>Login</button>
      </div>
    </div>
  );
}

export default Login;
