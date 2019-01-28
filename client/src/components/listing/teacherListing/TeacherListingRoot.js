import React, { Component } from "react";
import "../../App.css";
import ListingInfo from "./TeacherListingInfo";
import UserInfo from "./TeacherUserInfo";
import { Link } from "react-router-dom";

const TeacherListingRoot = () => (
  <div className="App-header" style={{ border: "1px solid black" }}>
    <div
      style={{ width: "50%", textAlign: "center", border: "1px solid black" }}
    >
      <h2>Teach us, master</h2>
      <ListingInfo style={{ border: "1px solid black" }} />
      <UserInfo />

      <button>Submit</button>

      <Link to="/">back home</Link>
    </div>
  </div>
);

export default TeacherListingRoot;
