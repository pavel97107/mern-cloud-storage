import React from "react";
import './style/index.css'
export default ({ children, onSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};
