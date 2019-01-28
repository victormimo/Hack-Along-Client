import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ListingOptions = () => {
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

export default ListingOptions;
