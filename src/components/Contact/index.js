import React from 'react';
import './public/css/contact.css';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact_center">
      <section className="contact_us">
        <div className="container">
          <div className="contact_row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="contact_row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3 className="section-title">Contact Us</h3>
                        <p>We would love to hear from you. </p>
                        <input type="text" className="form-control form-group" placeholder="Name" required />
                        <input type="text" className="form-control form-group" placeholder="Email" required />
                        <input type="text" className="form-control form-group" placeholder="Subject" required/>
                        <textarea className="form-control form-group" placeholder="Message" required></textarea>
                        <button type="submit" value="SEND" className="contact_form_submit">
                          <div className="alt_contact_form_submit">
                          <span className="plane"><FaPaperPlane /></span>
                          <span className="send-text">Send</span>
                          </div>
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="right_contact_social_icon d-flex align-items-end">
                      <div className="social_item_inner d-flex">
                        <li><a href="/"><GrFacebook size={18}/></a></li>
                        <li><a href="/"><GrInstagram size={18} /></a></li>
                        <li><a href="/"><GrTwitter size={18} /></a></li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single">
                    <FaPhoneAlt size={18} />
                    <span>+1 888-888-8888</span>
                  </div>
                  <div className="d-flex info_single">
                    <FaEnvelopeOpenText size={18} />
                    <span>info@markitiq.com</span>
                  </div>
                  <div className="d-flex info_single">
                    <FaMapMarkedAlt size={18} />
                    <span>Based in Dallas Texas. Services available worldwide.</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="contact_row">
            <div className="col-md-10">
              <div className="map_inner">
                <h3 className="section-title">Find Us on Google Map</h3>
                <hr />
                <h5>MarkitIQ Data & Social Services</h5>
                <p><i>Confidently combine your marketing genius with MarkitIQ machine intelligence for endless possibilities!</i></p>
                <div className="map_bind">
                  <iframe src="https://maps.google.com/maps?q=300%20Front%20St,%20Toronto%20ON&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
