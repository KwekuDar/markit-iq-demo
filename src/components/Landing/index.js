import React from 'react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Carousel from '../../carousel';
import ChatBubble from '../ChatBubble/index'
import markit from "./public/img/mylogo.svg";
import lady3 from './public/img/lady3.png';
import lady4 from './public/img/retro-lady.png';
import scribble2 from './public/img/2.png';
import scribble3 from './public/img/3.png';
import scribble4 from './public/img/4.png';
import scribble5 from './public/img/2.png';
import scribble6 from './public/img/8.png';
// import scribble9 from './public/img/9.png';
import scribble7 from './public/img/6.png';
import plus from './public/img/circle.png';
import './public/css/index.css';
import "./public/css/landing.css"
import "./public/css/blocks.scss"
import './public/css/words.scss';
import graph from "./public/img/graph.png";




export default function Landing() {
  return (
    <div>
      {/* Welcom Page till carousel */}
      <div className="landing-container">
        <div className="landing-content">
          <span>
            Turbocharge <br />your business growth<br /> with conversion <br /> intelligence
          </span>
          <p>
            Give your subscribers<br /> THE RIGHT MESSAGE - THE RIGHT OFFER - THE RIGHT TIME
          </p>
          <img src={scribble2} className="scribble1" alt="scribble" />
          <img src={scribble4} className="scribble2" alt="scribble" />
          {/* <img src={scribble9} className='scribble3' alt="scribble"/> */}
          <img src={lady3} className="lady" alt="lady" />
          <div className="landing-content-btns">
            <button className="get-started-btn">GET STARTED</button>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>

      </div>
      <Swiper id='none'
        navigation={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false, }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="text-carousel">

            <h2 className='rise-above'>Rise above the crowd with Markit IQ</h2>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-carousel">

            <h2 className='rise-above'>Unique solutions tailored to your budget</h2>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-carousel">

            <h2 className='rise-above'>Improve the performance of mobile sites</h2>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-carousel">

            <h2 className='rise-above'>Manage all digital communications in one location</h2>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-carousel">

            <h2 className='rise-above'>Create customized templates for each campaign</h2>

          </div>
        </SwiperSlide>

      </Swiper>

      <div className="landing-container2">

        <div className="content2">
          <div className="scribble4">
            <img src={scribble3} alt="scribble" />
          </div>
          <div className="scribble5">
            <img src={scribble5} alt="scribble" />
          </div>
          <div className="scribble6">
            <img src={scribble6} alt="scribble" />
          </div>
          <div className="scribble7">
            <img src={scribble7} alt="scribble" />
          </div>
          <div className="lady2">
            <img src={lady4} alt="scribble" />
          </div>
        </div>
        <div className="our-specialties">
          <span>OUR SPECIALTIES</span>
          <p>Harness the Power of Data and Technology with Markit IQ</p>
          <ul className="specialty-list">
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />Enterprise-grade automation
            </li>
            <br />
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />#1 in cross-channel capabilities for omnichannel customer engagement
            </li>
            <br />
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />Leveraging your competitive advantage{' '}
            </li>
            <br />
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />Personalized and tailored post-click engagement
            </li>
            <br />
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />Time-saving page cloning
            </li>
            <br />
            <li className="specialty-list-item">
              <img src={plus} alt="scribble" />Best-in-class learning plus technical management
            </li>
            <br />
          </ul>
          <button className="start-free-trial-btn">START FREE TRIAL</button>
        </div>
      </div>
      <div>



        {/* Welcom Page till carousel */}


        {/* Carousel and below */}
        <div className='carousel-section'>
          <div className="carousel-header">
            <img id='carousel-logo' src={markit} alt="" />
            <h2 className='slogan'>A personalized experience for every audience <br />  </h2>
          </div>


          <div className='carousel'>
            <Carousel />
          </div>
        </div>
        <div className="why-markit">

          <div className="why-wording">
            <h1>Why Markit IQ?</h1>
            <p>Confidently combine your marketing genius with  <br />MarkitIQ machine intelligence for endless possibilities!</p>
            <button className="get-started-btn">REQUEST DEMO</button>
          </div>
          {/* The points on why marktit IQ */}

          <div className="why-points">
            <header className="ms-header">
              <h1 className="ms-header__title">
                Markit IQ has
                <div className="ms-slider">
                  <ul className="ms-slider__words">
                    <li className="ms-slider__word">Multi-Channel Marketing</li>

                    <li className="ms-slider__word">Direct Mail Processing</li>

                    <li className="ms-slider__word">Omni Channel Capabilities</li>

                    <li className="ms-slider__word">Cloud-based Solutions</li>
                    {/* You need this duplicate so that the animation is smooth and infinite */}
                    <li className="ms-slider__word">Multi-Channel Marketing</li>
                  </ul>
                </div>
              </h1>
            </header>
          </div>


        </div>
        {/* Pop out graph section */}
        <section className="about">
          <div className="about-image">

            <img id='graph' src={graph} alt="graph" />

          </div>
          {/* MP */}
          <ChatBubble />

        </section>
        {/* Pop out graph section ends*/}

        <div className="ready-to-start">
          <h1>Are you ready for success ?</h1>

          <button className="get-started-btn">GET STARTED</button>
        </div>

      </div>



    </div>
  );
}
