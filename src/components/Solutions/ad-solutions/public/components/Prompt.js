import React from 'react'
import "../css/prompt.css"
import img from "../img/laptop-woman.jpg"
// import scribble2 from "../img/scribble2.png";
// import scribble3 from "../img/scribble3.png";
// import scribble4 from "../img/scribble4.png";

export const Prompt = () => {
  return (
    <>
      <div className="Prompt">
        <div className="Prompt-content">
          <span>
            Real Market
            <br /> Intelligence
            <br /> For Real Success
          </span>
          <p>
            Get the ROI you deserve by utilizing
            <br /> the most advanced and cost
            <br /> effective landing page platform!
          </p>
          <div className="Prompt-content-btns">
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
        <div className="Prompt-div">
          <img className="Prompt-pic" src={img} alt="#"></img>
          {/* <div className="Prompt-content-btns">
            <button className="get-started-btn2">GET STARTED</button>
          </div> */}
        </div>
        {/* <div className="Prompt-scribbles">
          <div className="scribble2">
            <img src={scribble2} />
          </div>
          {/* <div className="scribble3">
            <img src={scribble3} />
          </div>
          <div className="scribble4">
            <img src={scribble4} />
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
