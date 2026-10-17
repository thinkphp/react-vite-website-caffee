import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [authMessage, setAuthMessage] = useState("");

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthMessage("");
    setToggleMenu(false);
  };

  const closeAuth = () => {
    setAuthMode(null);
    setAuthMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthMessage("Authentication isn’t connected yet. Please contact us to set up your account.");
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-auth">
        <button type="button" onClick={() => openAuth("login")}>Log in</button>
        <button type="button" className="app__navbar-auth-signup" onClick={() => openAuth("signup")}>Sign up</button>
      </div>
      <div className="app__navbar-smallscreen">
        <button className="app__navbar-menu-button" type="button" aria-label="Open navigation menu" aria-expanded={toggleMenu} onClick={() => setToggleMenu(true)}>
          <GiHamburgerMenu color="#fff" fontSize={27} />
        </button>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <button className="overlay__close" type="button" aria-label="Close navigation menu" onClick={() => setToggleMenu(false)}>
              <MdOutlineRestaurantMenu fontSize={27} />
            </button>
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
            </ul>
            <div className="app__navbar-smallscreen-auth">
              <button type="button" onClick={() => openAuth("login")}>Log in</button>
              <button type="button" onClick={() => openAuth("signup")}>Sign up</button>
            </div>
          </div>
        )}
      </div>
      {authMode && (
        <div className="auth__backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeAuth()}>
          <section className="auth__dialog" role="dialog" aria-modal="true" aria-labelledby="auth-title">
            <button className="auth__close" type="button" aria-label="Close" onClick={closeAuth}>×</button>
            <p className="auth__eyebrow">GERICHT · YOUR TABLE</p>
            <h2 id="auth-title">{authMode === "login" ? "Welcome back" : "Join us"}</h2>
            <p className="auth__intro">{authMode === "login" ? "Sign in to continue to your account." : "Create an account for a more personal dining experience."}</p>
            <form onSubmit={handleSubmit}>
              {authMode === "signup" && <label>Full name<input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>}
              <label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
              <label>Password<input type="password" name="password" autoComplete={authMode === "login" ? "current-password" : "new-password"} minLength="8" placeholder="At least 8 characters" required /></label>
              {authMode === "signup" && <p className="auth__note">By signing up, you agree to receive account-related emails.</p>}
              <button className="auth__submit" type="submit">{authMode === "login" ? "Log in" : "Create account"}</button>
              {authMessage && <p className="auth__message" role="status">{authMessage}</p>}
            </form>
            <p className="auth__switch">{authMode === "login" ? "New to Gericht?" : "Already have an account?"}{" "}
              <button type="button" onClick={() => openAuth(authMode === "login" ? "signup" : "login")}>{authMode === "login" ? "Create an account" : "Log in"}</button>
            </p>
          </section>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
