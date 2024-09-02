import React, { useState } from "react";

export default function Textform(props){

    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handlecopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);        
      }
  
    const handleOnChange= (event)=>{
        console.log("on Change");
        setText(event.target.value)
    }
    const handleclick= ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const cleartext=()=>{
        let newText= '';
        setText(newText);
    }
    const [text,setText] = useState("");

    return(
        <div>
        <h2>{props.heading} </h2>
            <div className="mb-3">

               {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
               <textarea className="form-control" placeholder="Enter :) your Text here" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10">
                 
               </textarea>
            <br/>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleclick}>
                Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={cleartext}>
                Clear text
            </button>
            <button onClick={handlecopy} type="button" className="btn btn-primary mx-2" >
               copy
            </button>
     
           

            </div>
            <div className="container">
                <h1>Your text summary </h1>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008* text.split(" ").length} Minute read </p>
            </div>
        
        </div>
    )
}