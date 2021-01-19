import React from "react";
import "./style/index.css";

export default ({ type,name, value,placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
