import React from "react";
import vid from "../vids/landing.gif";
import "../css/video.css";
// import scribble1 from "../img/scribble1.png";
// import scribble2 from "../img/scribble2.png";
// import scribble6 from "../img/scribble6.png";

export const Video = () => {
  return (
    <>
      <div className="Section">
        <div className="Section-content">
          <div className="Section-text">
            <h1>
              MarkitIQ energizes your business with access to leading supply
              from premium publishers
            </h1>
            <p>
              Reach consumers seamlessly across CTV, DOOH, mobile, audio,
              desktop without changing platforms. As a programmatic advertising
              market leader, MarkitIQ offers our clients the most comprehensive
              and deepest omnichannel advertising inventory available.
            </p>
            <div className="Section-content-btns">
              <button className="get-started-btn">GET STARTED</button>
            </div>
          </div>
          <div className="Section-div">
            <img className="Section-gif" src={vid} alt="gif" />
          </div>
        </div>
        {/* <div className="Section-scribbles">
          <div className="section-scribble2">
            <img src={scribble2} />
          </div>
          <div className="section-scribble3">
            <img src={scribble6} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Video;
