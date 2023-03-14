// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function TextForm(props) {

  const [ text, setText ] = useState('')

  const handleUpClick = (e) => {
    // console.log('Button was clicked')
    // console.log(e.target)
    // setText("You've just clicked the button!")
    // console.log(text)
    let newText = text.toUpperCase()
    setText(newText)
    // console.log(text)
    // console.log(newText)
  }
  const handleLowClick = (e) => {
    // console.log('Button was clicked')
    // console.log(e.target)
    // // setText("You've just clicked the button!")
    // console.log(text)
    let newText = text.toLowerCase()
    setText(newText)
    // console.log(text)
    // console.log(newText)
  }
  const handleOnchange = (e) => {
    console.log('On change')
    console.log(e.target.value)
    setText(e.target.value)
  }
  const clearText = () => {
    let emptyText = text.slice(-1, 0)
    setText(emptyText)
  }

  return (
    <>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          
        </label>
        <textarea
          className="form-control"
          placeholder="Enter something to see the magic..."
          id="myBox"
          rows="9"
          value={text}
          onChange={handleOnchange}
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <hr />
        <p> <b>{text.split(' ').length} words and {text.length} characters </b></p>
        <p> {text.split(' ').length * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
