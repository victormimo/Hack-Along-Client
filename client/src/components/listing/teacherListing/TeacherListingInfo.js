import React from "react";
import { Field, reduxForm } from "redux-form";

let TeacherListingInfo = props => {
  console.log("props ", props);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5%",
        margin: "0 10% 10% 10%"
      }}
    >
      <div style={{ textAlign: "left", marginBotton: 20 }}>
        <Field
          style={{ width: "60%" }}
          name="title"
          type="text"
          component="input"
          placeholder="Title"
        />

        <Field
          style={{ width: "60%", height: 100 }}
          name="description"
          type="text"
          component="textarea"
          placeholder="Description"
        />
      </div>
    </div>
  );
};

function validate(values) {
  console.log("val ", values);
}

TeacherListingInfo = reduxForm({
  validate,
  form: "teacher-listing-info",
  destroyOnUnmount: false
})(TeacherListingInfo);

export default TeacherListingInfo;
