import React, { useState } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import ThemeButton from "../ThemeButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1 className="logo">
            CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
          </h1>
        </Link>
      </div>
      <div className="links-container">
        <div div className="ab">
          <ThemeButton className="theme-btn"></ThemeButton>
        <div className="links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/dashboard">
            <Button
              className="dash"
              text={"Dashboard"}
              outlined={false}
              onClick={() => console.log("btn clicked")}
            />
          </Link>
        </div>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
      </div>
    </div>
  );
};

export default Header;
