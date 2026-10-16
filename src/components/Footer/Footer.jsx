import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer_headtext">Contact Us</h1>
        <p className="p__opensans">Jl grand, Jakarta, Indonesia</p>
        <p className="p__opensans">+62 123456789</p>
        <p className="p__opensans">+62 987654321</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links-icon">
          <FiFacebook />
          <FaSquareXTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer_headtext">Working hours</h1>
        <p className="p__opensans">Weekdays</p>
        <p className="p__opensans">10:00AM - 12:00AM</p>
        <p className="p__opensans">Weekend</p>
        <p className="p__opensans">10:00AM - 02:00AM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2026 Adrian Statescu. All right Reserved.</p>
    </div>
  </div>
);

export default Footer;
