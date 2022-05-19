import React from 'react'
import { Slider } from './public/components/Slider'
import "./public/css/index.css"
import { Parallax } from "react-parallax";
import img from "./public/img/marketing.jpg"

import { Bulletin } from './public/components/Bulletin';
import { Prompt } from './public/components/Prompt';
import { Divider } from './public/components/Divider';
import { Button } from '@material-ui/core';

export default function AdSolutions() {
  return (
    <>
      <Prompt />
      <div className="App">
        <Slider className="carousel"
          height="500px"
          width="80%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <Divider />
      <Parallax className="Parallax" bgImage={img} strength={800}>
        <div className="Parallax-content">
          <h3>Join MarkitIQ Today!</h3>
          <div className="icons">
            <Button
              size="large"
              variant="outlined"
              style={{ color: "white", borderColor: "white" }}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </Parallax>
      <Bulletin />
    </>
  );
}
