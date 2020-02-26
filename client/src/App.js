import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
//Routes Switch

import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import NewUser from "./components/NewUser";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={UsersList} />

        {/* <Route path="/users/user/:id" component={UserDetails} /> */}
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
