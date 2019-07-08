import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Header from './components/Header'

function App() {
  return (
    <div classnName="appDiv"> 
    <Header />
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
    </div>
  );
}

export default App;
