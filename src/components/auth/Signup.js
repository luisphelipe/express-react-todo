import React, { useState } from "react";

import APIRequests from "../../requests/api.requests";

function Signup({ setToken }) {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [passwordConfirmation, setPasswordConfirmation] = useState("");

  // function submitSignup(event) {
  //   event.preventDefault();

  //   axios
  //     .post("http://localhost:3000/auth/signup", {
  //       email,
  //       password,
  //       passwordConfirmation
  //     })
  //     .then(({ data }) => {
  //       console.log(data);

  //       setToken(data.token);
  //     })
  //     .catch(errors => {
  //       console.log(errors);
  //     });
  // }

  async function submitSignup(event) {
    event.preventDefault();

    try {
      const token = await APIRequests().signup(
        email,
        password,
        passwordConfirmation
      );

      if (token) setToken(token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form">
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
