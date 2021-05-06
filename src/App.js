import React from "react"
import { Route , Switch} from "react-router-dom";
import Artist from "./components/Artist"
import Nav from "./components/Nav"
import Search  from "./components/Search"
import Song from "./components/Song"
import Main from "./data/Main"
import trackArr from "./data/Trackdata"
// console.log('track:', trackArr)
import './App.css';

function App() {
// const track = trackArr.map((track,index) => {
return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Main/>
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
      </Switch>
 
      </div>
  );
}
// )
// }
console.log('track:',trackArr)
export default App;
