import React from "react"
import { Route , Switch} from "react-router-dom";
import Artist from "./components/Artist"
import Nav from "./components/Nav"
import Search  from "./components/Search"
import Song from "./components/Song"
import Context from "./data/Context"
import Data from "./data/Data"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Context/>
      </Route>
      <Route path="/Artist">
        <Artist/>
      </Route>
      <Route path="/Song">
        <Song/>
      </Route>
      <Route path="/Search">
        <Search/>
      </Route>
      <Data/>
      </Switch>
 
      </div>
  );
}

export default App;
