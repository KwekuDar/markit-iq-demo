import React from "react";
import { Link } from "react-router-dom";
import "./public/css/login.css";
import login_cover from "./public/img/login_cover.jpg";

export default function Login() {
  return (
    <div className="login-center">
      <div className="background position-absolute z-index_-1 w-100 h-100">
        <img className="cover" src={login_cover} alt="handshake" />
        <div className="filter light-filter-diagonal"></div>
      </div>
      <div className="container py-5">
        <div className="row box">
          <div className="col-lg-5 container-forms">
            <div className="container-form">
              <div className="py-5 text-center text-lg-start">
                <div>
                  <h2 className="text-color">
                    Login
                  </h2>
                </div>

                <div className="card-content" style={{ marginTop: "40px" }}>
                  <form action="">
                  <input
                    className="form-control"
                    style={{ width: "80%" }}
                    type="text"
                    placeholder="Email address *" required/>
                  <input
                    className="form-control"
                    style={{ marginTop: "20px", width: "80%" }}
                    type="password"
                    placeholder="Password *" required
                  />
                  <button type="submit" value="Login" className="btn primary-color" style={{ marginTop: "40px" }}>
                    <span>Login</span>
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container-backdrop">
            <h3 className="back">
              <p>Don't have an account?</p>
              <hr />
              <Link to="/register"><button className="btn primary-color">Sign Up</button></Link>
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="position-relative light-gray-1" style={{ marginBottom: "-20%" }}>
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-9 mb-4 mb-lg-0">
              <h2 className="h3 text-color">
                Smart Solutions for Smart Businesses
              </h2>
              <p
                className="second-text-color"
                style={{ marginTop: "10px" }}
              >
                Realtime platform to manage all digital communications in one
                location
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
