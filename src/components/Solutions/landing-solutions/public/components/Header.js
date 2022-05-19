import React from 'react'
import img from "../vids/drag.gif"
import "../css/header.css"
// import scribble1 from "../img/scribble1.png";
// import scribble3 from "../img/scribble3.png";
// import scribble4 from "../img/scribble4.png";


export const Header = () => {
  return (
    <div className="Header">
      <div className="Header-content">
        <div className="Header-div">
          <img className="Header-gif" src={img} alt="#"></img>
        </div>
        <div className="Header-text">
          <h1>
            MarkitIQ delivers landing pages tailored to your business and target
            audience
          </h1>
          <p>
          Streamline workflows and maximize productivity with AI-driven automation, machine learning, and efficiencies at scale 
          </p>
          <div className="Header-content-btns">
            <button className="get-started-btn">GET STARTED</button>
          </div>
        </div>
      </div>
      {/* <div className="Header-scribbles">
        <div className="header-scribble2">
          <img src={scribble1} />
        </div>
        <div className="header-scribble3">
          <img src={scribble3} />
        </div>
        <div className="header-scribble4">
          <img src={scribble4} />
        </div>
      </div> */}
    </div>
  );
}
