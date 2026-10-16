import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Thanya Food Company, your cozy escape for great coffee, delicious bites,
          and warm connections. We’re passionate about creating a space where
          everyone feels at home, whether you're catching up with friends or
          enjoying a quiet moment. Every cup is brewed with care, every dish
          crafted with love, and every visit designed to brighten your day.
        </p>
      </div>
      <div className="app__aboutus-content_filter flex__center">
        <img src={images.filter} alt="about filter" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Founded in 2024, Lemuel began as a small dream to bring people
          together over exceptional coffee and food. Over the years, we’ve grown
          into a beloved community hub, blending tradition with innovation. From
          our humble beginnings to today, our commitment to quality and
          hospitality remains at the heart of everything we do.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
