import React, { useState } from "react";
import { Form, Input } from "../../components";
import "./style/index.css";
import { useDispatch } from "react-redux";
import { login } from "../../actions";

export default ({ history }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function hadnlerChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(login(userData, history));
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login__body">
          <Form onSubmit={handlerSubmit}>
            <h3>Войти в систему</h3>
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
            <button type="submit">Отправить</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
