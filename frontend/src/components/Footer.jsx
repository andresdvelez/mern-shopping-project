import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="links">
          <div className="link__wrapper">
            <div className="link__items">
              <h2>About Us</h2>
              <a href="/how-it-works">How it works</a>
              <a href="/investments">Investments</a>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
            <div className="link__items">
              <h2>Contact Us</h2>
              <Link to="/contact">Contact</Link>
              <Link to="/support">Support</Link>
              <Link to="/sponsorships">Sponsorships</Link>
            </div>
          </div>
          <div className="link__wrapper">
            <div className="link__items">
              <h2>Videos</h2>
              <Link to="ambassadors">Ambassadors</Link>
              <Link to="agency">Agency</Link>
              <Link to="influencer">Influencer</Link>
            </div>
            <div className="link__items">
              <h2>Social Media</h2>
              <Link to="ambassadors">Instagram</Link>
              <Link to="agency">Facebook</Link>
              <Link to="influencer">Youtube</Link>
              <Link to="influencer">Twitter</Link>
            </div>
          </div>
        </div>
        <div className="social__media">
          <div className="social__media-wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">
                Cart.
              </a>
            </div>
            <p className="website__rights">©​ Cart. 2021. All rights reserved</p>
            <div className="social__icons">
              <a href="/" className="social__icon-link" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" className="social__icon-link" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="social__icon-link" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social__icon-link" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="social__icon-link" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
