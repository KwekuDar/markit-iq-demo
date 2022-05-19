import React from 'react'
import vid from "../vids/charts.gif"
import AddTaskIcon from "@mui/icons-material/AddTask";
import "../css/bulletin.css"
// import scribble1 from "../img/scribble1.png"
// import scribble2 from "../img/scribble2.png";
// import scribble3 from "../img/scribble3.png";
// import scribble4 from "../img/scribble4.png";
// import scribble5 from "../img/scribble5.png"
// import scribble6 from "../img/scribble6.png";

export const Bulletin = () => {
  return (
    <div className="Bulletin">
      <div className="Bulletin-content">
        <div className="Image-div">
          <img className="Image" src={vid} alt=""/>
        </div>
        <div className="Text-div">
          <div className="Text">
            <h1 className="h1">Optimization</h1>
            <div className="Bullets">
              <AddTaskIcon style={{ color: "#b643fa" }} />
              <p className="p">
              Algorithmically optimize bids and budgets to drive performance and impact 
              </p>
            </div>
            <div className="Bullets">
              <AddTaskIcon style={{ color: "#b643fa" }} />
              <p className="p">
              Plan and execute intelligent campaigns that meet your customers where they shop
              </p>
            </div>
            <div className="Bullets">
              <AddTaskIcon style={{ color: "#b643fa" }} />
              <p className="p">
              Increase brand awareness and connect on a deeper level with your customer with easily created and shareable content
              </p>
            </div>
          </div>
        </div>
        {/* <div className="Bulletin-scribbles">
          <div className="Bulletin-scribble5">
            <img src={scribble5} />
          </div>
          <div className="Bulletin-scribble1">
            <img src={scribble1} />
          </div>
          <div className="Bulletin-scribble6">
            <img src={scribble6} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
