import React from "react";
import { Link } from "react-router-dom";
import "./public/css/register.css";
import register_cover from "./public/img/login_cover.jpg";

export default function Login() {
  return (
    <div className="register-center">
      <div className="background position-absolute z-index_-1 w-100 h-100">
        <img className="cover" src={register_cover} alt="handshake" />
        <div className="filter light-filter-diagonal"></div>
      </div>
      <div className="container py-5">
        <div className="row box">
          <div className="col-lg-5 container-forms">
            <div className="container-form-register">
              <div className="py-5 text-center text-lg-start">
                <div>
                  <h2 className="second-text-color">
                    Create Account
                  </h2>
                </div>

                <div className="card-content" style={{ marginTop: "40px" }}>
                  <form action="">
                <input
                    className="form-control"
                    style={{ width: "80%" }}
                    type="text"
                    placeholder="Full Name *" required />
                  
                  <input
                    className="form-control"
                    style={{ marginTop: "20px", width: "80%" }}
                    type="text"
                    placeholder="Email address *" required />
                  <input
                    className="form-control"
                    style={{ marginTop: "20px", width: "80%" }}
                    type="password"
                    placeholder="Password *" required
                  />
                  <input
                    className="form-control"
                    style={{ marginTop: "20px", width: "80%" }}
                    type="password"
                    placeholder="Confirm Password *" required
                  />
                  <button className="btn primary-color" style={{ marginTop: "40px" }}>
                    <span>Sign Up</span>
                  </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div className="container-backdrop">
            <h3 className="back">
              <p>Already have an account?</p>
              <hr />
              <Link to="/login"><button className="btn primary-color">Log In</button></Link>
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="position-relative light-gray-1" style={{ marginBottom: "-20%" }}>
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-9 mb-4 mb-lg-0">
              <h2 className="h3 text-color">
                Real Market Intelligence For Real Success
              </h2>
              <p
                className="second-text-color"
                style={{ marginTop: "10px" }}
              >
                Confidently combine your marketing genius with MarkitIQ machine intelligence for endless possibilities!
              </p>
            </div>
            <div className="col-lg-2 col-md-4 text-center">
              <Link to="/">
                <button className="btn primary-color">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
