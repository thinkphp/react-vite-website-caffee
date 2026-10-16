import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            At Lemuel, we believe that great food has the power to bring people
            together.
          </p>
        </div>
        <p className="p__opensans">
          Every dish we create is a celebration of fresh, locally-sourced
          ingredients and the love we pour into our craft. Our mission is to
          serve not just meals, but memorable experiences that nourish both body
          and soul. From our kitchen to your table, we’re here to make every
          bite unforgettable.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Animation Chef</p>
        <p className="p__opensans"> Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
