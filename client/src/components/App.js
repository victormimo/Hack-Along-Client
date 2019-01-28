import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";
import Teacher from "./listing/teacherListing/TeacherListingRoot";
import Student from "./listing/studentListing/StudentListingRoot";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/lead" component={Teacher} />
          <Route exact path="/hack" component={Student} />
        </div>
      </Router>
    );
  }
}

export default App;
