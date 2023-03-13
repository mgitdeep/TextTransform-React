import React from "react";

export default function TextForm(props) {
  return (
    <>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="9"
        ></textarea>
        <button className="btn btn-primary my-3">Convert to Uppercase</button>
      </div>
    </>
  );
}
