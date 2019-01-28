import React from "react";
import ListingOptions from "./ListingOptions";
import logo from "../../logo-temp.png";
import "../App.css";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} alt="logo" />
      <p>What are you hacking tonight?</p>
      <ListingOptions />
    </header>
  </div>
);

export default Home;
