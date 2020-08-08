import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Welcome from "./components/WelcomeComponent";
import List from "./components/ListComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list" component={List}></Route>
        <Route path="/" component={Welcome}></Route>
        <Redirect to="/" component={Welcome}></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
