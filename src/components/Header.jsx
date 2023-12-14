import React, { useState } from "react";

import Button from "./Button";

import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-container">
          <img
            className="site-logo"
            src="http://placekitten.com/50/50"
            alt=""
          />
          <h1 className="site-title">ProjectLite</h1>
        </div>

        <Button
          className={`menu-button ${showMenu ? "open" : ""}`}
          label={<i className={showMenu ? "gg-close" : "gg-menu"}></i>}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />

        <Navbar showMenu={showMenu} />
      </div>
    </header>
  );
}

export default Header;
