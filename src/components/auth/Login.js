import React, { useState } from "react";
import axios from "axios";

function Login({ handleAuth, setToken }) {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  function submitLogin(event) {
    if (event) event.preventDefault();

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
    <div class="form">
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={event => setEmail(event.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
        onKeyDown={event => {
          if (event.key === "Enter") {
            submitLogin();
          }
        }}
      />

      <button onClick={event => submitLogin(event)}>Login</button>
    </div>
  );
}

export default Login;
