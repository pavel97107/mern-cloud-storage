import React, { useEffect } from "react";
import './style/index.css'






export default ({onClose, logOut}) => {


    function handleClickByDocument(e) {
        if(!e.target.closest('username')) {
            onClose(false);
        }
    }

  useEffect(() => {


      document.addEventListener("click", handleClickByDocument);

    return () =>
      document.removeEventListener("click", handleClickByDocument);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <div className="dashboard__link" onClick={logOut}>Log out</div>
      </div>
    </div>
  );
};
