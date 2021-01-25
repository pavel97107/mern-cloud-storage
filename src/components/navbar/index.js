import React, { useState } from "react";
import "./style/index.css";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DashBoard from "../dashboard";
import {logout} from "../../actions/auth";

export default () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()


  const user = {
    email: "pavel123123@mail.com",
  };


  function logOut() {
    dispatch(logout(history))
  }

  return (
    <nav className="navbar">

      <div className="container">
        <div className="navbar__body">
          <Link className="navbar__logo" to="/">
            <div className="navbar__logo-item">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="navbar__logo-img"
              />
            </div>
            <h3 className="navbar__logo-title">CLOUD</h3>
          </Link>

          {!isAuth && (
            <div className="navbar__links">
              <Link to="/login">
                <button className="navbar__link-login">Войти</button>
              </Link>
              <Link to="/register">
                <button className="navbar__link-registration">
                  Регистрация
                </button>
              </Link>
            </div>
          )}
          {isAuth && (
            <div className="navbar__links user-links">
              <Link to="/user" className="navbar__links-avatar avatar">
                <img
                  src="https://sun9-9.userapi.com/impg/k6anPEgM2sI4okfSqw8wSNnyIJ11EJiROfq6UA/ecKTQD4SaOY.jpg?size=1080x1080&quality=96&proxy=1&sign=d57f156e7513a054523a5e1e521db90e&type=album"
                  alt="avatar"
                />
              </Link>
              <div
                onClick={(e) => {
                    e.stopPropagation()
                    setDropDownMenu(!dropdownMenu )
                }}
                className="navbar__links-username username"
              >
                <h5>{user.email.split("@")[0]}</h5>
                {dropdownMenu && <DashBoard logOut={logOut} onClose={setDropDownMenu} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
