import React from "react";
import './style/index.css'
export default ({ children }) => {
  return (
    <div className="form">
      <form>{children}</form>
    </div>
  );
};
