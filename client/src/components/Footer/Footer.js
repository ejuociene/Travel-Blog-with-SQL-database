import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Logo from '../../images/footer_logo.png';
import instagram from '../../images/insta.svg';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import youtube from '../../images/youtube.svg';
import pinterest from '../../images/pinterest.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<img src={Logo} alt="logo" className="footer-logo" onClick={() => window.scrollTo(0, 0)} />
			<div className="social-media-container">
				<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
					<img src={instagram} alt="instagram" className="social-icon" />
				</a>
				<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
					<img src={youtube} alt="youtube" className="social-icon" />
				</a>
				<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
					<img src={facebook} alt="facebook" className="social-icon" />
				</a>
				<a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
					<img src={twitter} alt="twitter" className="social-icon" />
				</a>
				<a href="http://pinterest.com/" target="_blank" rel="noopener noreferrer">
					<img src={pinterest} alt="pinterest" className="social-icon" />
				</a>
			</div>
			<div className="footer-text">&#xA9; 2022 Around the World Blog</div>
		</footer>
	);
};

export default Footer;
