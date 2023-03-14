import React, { useState } from "react";

export default function TextForm(props) {

  const [ text, setText ] = useState()

  const handleUpClick = (e) => {
    console.log('Button was clicked')
    console.log(e.target)
    // setText("You've just clicked the button!")
    console.log(text)
    let newText = text.toUpperCase()
    setText(newText)
    console.log(text)
    console.log(newText)
  }
  const handleOnchange = (e) => {
    console.log('On change')
    console.log(e.target.value)
    setText(e.target.value)
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

        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
    </>
  );
}
