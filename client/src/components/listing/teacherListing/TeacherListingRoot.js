import React from "react";
import "../../App.css";
import ListingInfo from "./TeacherListingInfo";
import UserInfo from "./TeacherUserInfo";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import axios from "axios";

let TeacherListingRoot = props => {
  console.log("props 3", props);
  const { handleSubmit } = props;
  return (
    <div className="App-header">
      <div
        style={{ width: "50%", textAlign: "center", border: "1px solid black" }}
      >
        <h2>Teach us, master</h2>
        <form
          onSubmit={values => {
            console.log("form values, ", values);
            const promise = axios.post("localhost:5000/api/test", values);
            promise.then(
              res => {
                console.log("succes");
              },
              err => {
                if (err) {
                  console.log("err occurred");
                }
              }
            );
          }}
        >
          <ListingInfo />
          <UserInfo />

          <button type="submit">Submit</button>
        </form>
        <Link to="/">back home</Link>
      </div>
    </div>
  );
};

TeacherListingRoot = reduxForm({
  form: "teacher-listing-info"
})(TeacherListingRoot);

export default TeacherListingRoot;
