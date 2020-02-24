import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
//Routes Switch
import Home from "./screens/Home";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import NewUser from "./components/NewUser";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/users/allUsers" render={() => <UsersList />} />
        <Route
          path="/users/user/:id"
          render={match => <UserDetails {...match} />}
        />
        <Route path="/users/newUser" component={NewUser} />
      </Switch>
    </>
  );
}

export default App;
