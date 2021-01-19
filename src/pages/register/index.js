import React, { useState } from "react";
import { Form, Input } from "../../components";
import "./style/index.css";

export default () => {
  const [userData, setUserData] = useState({
    emai: "",
    password: "",
  });
  function hadnlerChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <div className="registration">
      <div className="container">
        <div className="registration__body">
          <Form>
            <h3>Регистрация</h3>
            <div className="form__group">
              <Input
                type="email"
                value={userData.email}
                name="email"
                placeholder="Введите Email"
                onChange={(e) => hadnlerChange(e)}
              />
            </div>
            <div className="form__group">
              <Input
                type="password"
                value={userData.password}
                name="password"
                placeholder="Введите Пароль"
                onChange={(e) => hadnlerChange(e)}
              />
            </div>
            <button>Отправить</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
