
import React, { useState } from "react";


export default function TextForm(props) {

  const [ text, setText ] = useState('')

  const handleUpClick = (e) => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowClick = (e) => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnchange = (e) => {
    // console.log('On change')
    // console.log(e.target.value)
    setText(e.target.value)
  }

  const clearText = () => {
    let emptyText = text.slice(-1, 0)
    setText(emptyText)
  }

  const copyText = () => {
    let allText = document.getElementById('myBox')
    console.log(allText)
    console.log(allText.value)
    navigator.clipboard.writeText(allText.value)
  }

  const removeSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  return (
    <>
    <h1 style={{color: `${props.mode}` === 'dark'?'white':'black'}}>{props.heading}</h1>
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
          style={{backgroundColor: `${props.mode}`==='dark'?'#2c2f32':'white', color: props.mode==='dark'?'white':'black' }}
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <hr />
        <p> <b>{text.split(' ').length} words and {text.length} characters </b></p>
        <p> {text.split(' ').length * 0.008} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here!"}</p>
      </div>
    </>
  );
}
