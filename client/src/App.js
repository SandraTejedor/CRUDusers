import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
//Routes Switch
import Home from "./screens/Home";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/users/allUsers" render={() => <UsersList />} />
        <Route path="/users/user/:id" component={UserDetails} />
      </Switch>
    </>
  );
}

export default App;
