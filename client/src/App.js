import React, { Component, Fragment } from "react";
import logo from "./logo-temp.png";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" />
            <p>What are you hacking tonight?</p>
            <Listings />
            <Route path="/" component={Home} />
            <Route path="/lead" component={Teacher} />
            <Route path="/hack" component={Student} />
          </header>
        </div>
      </Router>
    );
  }
}

const Listings = () => {
  return (
    <Fragment>
      <Link to="/hack" className="App-link">
        I want to learn
      </Link>
      <Link to="/lead" className="App-link">
        I want to teach
      </Link>
    </Fragment>
  );
};

const Home = () => <div />;

const Teacher = () => <h2>hello hacker master</h2>;

const Student = () => <h2>hello hacker</h2>;

export default App;
