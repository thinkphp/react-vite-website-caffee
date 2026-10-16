import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Relax Sensation" />
      <h1 className="app__header-h1 size">The Key to Relaxing</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Step into a world where time slows down, and every sip feels like a
        moment of bliss. At our café, relaxation isn't just a state of mind—it's
        an experience. Whether you're savoring the rich aroma of freshly brewed
        coffee, indulging in a decadent pastry, or simply soaking in the cozy
        ambiance, you'll find the perfect escape from the hustle of everyday
        life. Let the gentle hum of conversation and the warmth of our space be
        your invitation to unwind, recharge, and rediscover the joy of the
        present moment. Relaxation starts here.
      </p>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
