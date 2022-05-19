import React from 'react';
import "./public/css/knowledge.css";
import Tabs from './Tabs';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdLiveHelp } from 'react-icons/md';
import { FcFaq } from 'react-icons/fc';


export default function Knowledge() {

  return (
    
    <div>
        <div className="conversion-marketing">
          <h1>Conversion Marketing</h1>
         <div className="search-field">
           <input type="text" name='search' id='search-bar' placeholder='Search...' />
           <input type="submit" id='search-button' value="SEARCH NOW" />
         </div>

        </div>

        <div className="why-markit-knowledge">

          <div className="why-wording-knowledge">
            <hr />
            <h1>Start working faster<br /> today</h1>
            <p>Utilize our data driven platform and interactive dashboard</p>
            <p>Digital and Social solutions improve business organization</p>
            <a href="ad-solutions">Learn More <MdArrowForwardIos /></a>
          </div>
          {/* The points on why marktit IQ */}

          <div className="why-points">

            <div className="points1">
              <div className="point-knowledge">
                <div className='point-knowledge-logo'>
                <FcFaq size={32} />
                </div>
                <div className="point-wordings">
                  <h4>FAQS</h4>
                  <p> Frequently Asked Questions </p>
                </div>
              </div>   
            </div>

            <div className="points2">
              <div className="point-knowledge">
                <div className='point-knowledge-logo'>
                  <MdLiveHelp fill="#8ec2f2" size={32} />
                </div>
                <div className="point-wordings">
                  <h4>Help Center</h4>
                  <p>Have any issues? <br /> Click here for help </p>
                </div>
              </div>    
            </div>
          </div>
            
            
        </div>

        <div className="tabs-section">
          <Tabs />
        </div>

        <div className="ready-to-start">
          <h1>Are you ready for success ?</h1>
          <button className="get-started-btn">GET STARTED</button>
        </div>
    </div>
  )
}
