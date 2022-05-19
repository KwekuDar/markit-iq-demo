import React from 'react';
import './public/css/chatbubble.scss';

export default function ChatBubble() {
  return (
  <div className="chat-card">
    <div className="chat-card-body">
      <div className="chat-thread">
        <div className="message">
          <div className="avatar"></div>
          <div className="message-content">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Change your success strategy</p>
          </div>
        </div>

        
        <div className="message">
          <div className="avatar"></div>
          <div className="message-content">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Embolden brand awareness to communicate value and necessity
                  <br />Connect, Engage and Motivate Action!</p>
          </div>
        </div>
        <div className="message">
          <div className="avatar"></div>
          <div className="message-content">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p> Maximize your effectiveness with clean customer lists</p>
          </div>
        </div>

        <div className="message">
          <div className="avatar"></div>
          <div className="message-content">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p> See what consumers are doing online, why they do it, <br />and how it can be converted into an impactful campaign</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
