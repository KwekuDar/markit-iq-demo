import React, { useState } from 'react';
import './css/index.css';
import { BsChevronCompactDown } from 'react-icons/bs';

export default function Header() {
	const [ navbar, setNavbar ] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);
	const dropDownIcon = { color: 'white', paddingRight: "10px" };
		const dropDownIcoActive = { color: 'black', paddingRight: "10px" };

	return (
		<nav className={navbar ? 'nav-bar active' : 'nav-bar'}>
			<button className={navbar ? 'markit-home active' : 'markit-home'} type="button">
				{/* <img src="./img/logo.png" /> */}
				<span> <a href='/'> MARKIT IQ  </a></span>
			</button>
			<div className="nav-sections" id="">
				<div>
					<ul className="nav-items">
						<li className={navbar ? 'nav-item active' : 'nav-item'}>
							<a className="nav-link" href="">
								<BsChevronCompactDown style={navbar ? dropDownIcoActive : dropDownIcon} />
								<span>Solutions</span>
							</a>
							<ul>
								<li>
									<a href="advertising-solutions">Programmatic Ads</a>
								</li>
								<li>
									<a href="landing-solutions">Landing Pages</a>
								</li>
							</ul>
						</li>
						<li className={navbar ? 'nav-item active' : 'nav-item'}>
							<a className="nav-link" href="pricing">
								<span>Pricing</span>
							</a>
						</li>
						<li className={navbar ? 'nav-item active' : 'nav-item'}>
							<a className="nav-link" href="knowledge">
								<span>Knowledge</span>
							</a>
						</li>
						<li className={navbar ? 'nav-item active' : 'nav-item'}>
							<a className="nav-link" href="contact">
								<span>Contact Us</span>
							</a>
						</li>
					</ul>
				</div>
				<ul className={navbar ? 'login active' : 'login'}>
					<li>
						<a href="login">Login</a>
					</li>
					<li>
						{/* free trial button should lead to the plans section on pricing page */}
						<button className={navbar ? 'start-trial-btn active' : 'start-trial-btn'}>
							<span classname="btn-text light-text-color">START MY FREE TRIAL</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
