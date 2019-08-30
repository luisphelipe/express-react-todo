import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import TodoList from "./components/todo/TodoList";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import PrivateNav from "./components/routing/PrivateNav";
import PublicNav from "./components/routing/PublicNav";
import PrivateRoute from "./components/routing/PrivateRoute";
import GuestRoute from "./components/routing/GuestRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false),
    [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="App">
      <Router>
        <nav>
          {isAuth ? (
            <PrivateNav submitLogout={() => this.submitLogout()} />
          ) : (
            <PublicNav />
          )}
        </nav>

        <PrivateRoute
          path="/"
          exact
          component={TodoList}
          isAuth={isAuth}
          authToken={token}
        />

        <GuestRoute
          path="/login/"
          component={Login}
          isAuth={isAuth}
          handleAuth={() => setIsAuth(true)}
          setToken={setToken}
        />

        <GuestRoute
          path="/signup/"
          component={Signup}
          isAuth={isAuth}
          handleAuth={() => setIsAuth(true)}
          setToken={setToken}
        />
      </Router>
    </div>
  );
}

export default App;
