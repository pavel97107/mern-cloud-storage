import React from "react";
import "./style/index.css";
import { Link } from "react-router-dom";
export default () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__body">
          <Link to="/">
            <div className="navbar__logo">
              <div className="navbar__logo-item">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="navbar__logo-img"
                />
              </div>
              <h3 className="navbar__logo-title">CLOUD</h3>
            </div>
          </Link>
          <div className="navbar__dashboard">
            <Link to="/login">
              <button className="navbar__dashboard-login">Войти</button>
            </Link>
            <Link to="/register">
              <button className="navbar__dashboard-registration">
                Регистрация
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
