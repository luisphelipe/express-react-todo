import React, { useState } from "react";
import axios from "axios";

function Signup({ handleAuth, setToken }) {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [passwordConfirmation, setPasswordConfirmation] = useState("");

  function submitSignup(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/auth/signup", {
        email,
        password,
        passwordConfirmation
      })
      .then(({ data }) => {
        console.log(data);

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
        id="email"
        placeholder="Email"
        onChange={event => setEmail(event.target.value)}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
      />

      <input
        type="password"
        name="password_confirmation"
        placeholder="Password Confirmation"
        onChange={event => setPasswordConfirmation(event.target.value)}
      />

      <button onClick={event => submitSignup(event)}>Signup</button>
    </div>
  );
}

export default Signup;
