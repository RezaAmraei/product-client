import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/product/:id">
          <Detail />
        </Route>

        <Route exact path="/product/:id/edit">
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
