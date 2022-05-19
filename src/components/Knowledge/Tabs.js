import React from 'react'
import { useState } from 'react'
import "./public/css/tabs.css"
import lady1 from "../Landing/public/img/Placeholder.jpg"
import lady2 from "../Landing/public/img/real-woman.jpg"
import ditigal from "../Landing/public/img/Internet Marketing Animation/Digital Marketing/large.png"
import email from "../Landing/public/img/Internet Marketing Animation/Email Marketing/large.png"


export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='container-tabs'>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Blog
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Video Library
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Customer Stories
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>

          <section className="projects">

            <div class="blog1">
              <h3>Turnkey solutions that convert</h3>
              <p>Use data to derive actionable insights with full context <br /> and make informed strategy and campaign decisions  </p>
              <img src={ditigal} alt="digital" />

            </div>

            <div className="blog2">
              <h3>Match page text to each recipient</h3>
              <p>AI campaigns reach your target audience directly,<br /> ensuring your message is top-of-mind  </p>
              <img src={email} alt="email" />

            </div>

          </section>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


          <p className='webinar'>
            Video content coming soon

          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >


          <section className="projects">

            <div className="blog1-story">
              <h3>Sustainable relationships</h3>
              <p>Acquire and promote potential clients to expand your business <br/>network and help drive conversions! Who could ask for more?   </p>
              <img src={lady1} alt="lady" />

            </div>

            <div className="blog2-story">
              <h3>Essential Insights</h3>
              <p>Your powerful narrative strengthens your campaign;<br/>extending your reach and engagement potential </p>
              <img src={lady2} alt="lady" />

            </div>

          </section>

        </div>
      </div>

    </div>
  )
}
