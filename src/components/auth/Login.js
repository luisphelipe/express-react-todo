import React, { useState } from "react";

import APIRequests from "../../requests/api.requests";

function Login({ setToken }) {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  async function submitLogin(event) {
    if (event) event.preventDefault();

    const token = await APIRequests().login(email, password);

    setToken(token);
  }

  return (
    <div className="form">
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
