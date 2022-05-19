import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsChevronCompactDown } from 'react-icons/bs';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import './css/index.css';

export default function MobileHeader() {
	const [ navbar, setNavbar ] = useState(false);
	const [ menu, setMenu ] = useState(false);
	const closeBtnStyled = {
		position: 'absolute',
		color: 'white',
		marginLeft: '5%',
		marginTop: '2%',
		width: '40px',
		height: '40px'
	};
	const closeBtnHide = {
		display: 'none'
	};
	const dropDownIconStyled = {
		marginLeft: '10px'
	};
	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	const openMenu = () => {
		if (!menu) {
			setMenu(true);
		}
	};

	const closeMenu = () => {
		if (menu) {
			setMenu(false);
		}
	};
	window.addEventListener('scroll', changeBackground);

	return (
    <nav className={navbar ? "mobile-nav-bar active" : "mobile-nav-bar"}>
      <button
        class={navbar ? "markit-home active" : "markit-home"}
        type="button"
      >
        {/* <img src="./img/logo.png" /> */}
        <span>Markit IQ</span>
      </button>

      <Link to="#">
        <FaBars
          className={
            navbar ? "hamburgerMenuStyledActive" : "hamburgerMenuStyled"
          }
          onClick={openMenu}
        />
      </Link>

      <div className={menu ? "light-box" : "light-box-hide"}>
        <AiOutlineCloseSquare
          className={menu ? "closeBtnStyled" : "closeBtnHide"}
          onClick={closeMenu}
        />

        <div className={menu ? "light-box-menu" : ""}>
          <ul>
            <li>
              <span className="menu-solutions">
                Solutions
                <BsChevronCompactDown style={dropDownIconStyled} />
              </span>

              <li>
                <a href="advertising-solutions">Programmatic Ads</a>
              </li>
              <li>
                <a href="landing-solutions">Landing Pages</a>
              </li>
            </li>
            <li>
              <a href="pricing">
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="knowledge">
                <span>Knowledge</span>
              </a>
            </li>
            <li>
              <a href="contact">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="login">
                <span>Login</span>
              </a>
            </li>
            <li>
              <a href="pricing">
                <span>Register</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
