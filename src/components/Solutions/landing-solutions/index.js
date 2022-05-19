import React from 'react'
import { Header } from './public/components/Header';
import  Video  from './public/components/Video';
import { Parallax } from 'react-parallax';
import pic from "./public/img/landing.png";
import "./public/css/parallax.css";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";

export default function LandingSolutions() {
  return (
    <>
      {/* <Parallax className="Landing-parallax1" bgImage={img} strength={800}>
        <div>
          Create & share beautiful landing pages with our amazing custom
          templates.
        </div>
      </Parallax> */}
      <Header />
      <Video />
      <Parallax className="Landings-parallax" bgImage={pic} strength={800}>
        <div className="Landings-div">
          <div className="Landings-cards">
            <WebRoundedIcon style={{ color: "#b643fa" }} />
            <h3 style={{color: "black"}}>Title</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          <div className="Landings-cards">
            <DashboardCustomizeRoundedIcon style={{ color: "#b643fa" }} />
            <h3 style={{color: "black"}}>Title</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
          <div className="Landings-cards">
            <PreviewRoundedIcon style={{ color: "#b643fa" }} />
            <h3 style={{color: "black"}}>Title</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>
        </div>
      </Parallax>
      {/* <Parallax className="Landing-parallax" bgImage={img} strength={800}>
        <div>Smart Landing Pages</div>
      </Parallax> */}
    </>
  );
}
