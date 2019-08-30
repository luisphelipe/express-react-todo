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
    <div>
      <h2>Signup</h2>
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={event => setPassword(event.target.value)}
        />

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          onChange={event => setPasswordConfirmation(event.target.value)}
        />

        <button onClick={event => submitSignup(event)}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
