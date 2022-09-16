import React from "react";
import Logo from "../../assets/images/cat-modem-removebg.png";
import './header.css';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="align-items-center mt-md-3 d-flex flex-row">
        <div className="col-md">
          <img alt="sleepy-cat-in-modem" src={Logo} width="120px" />
        </div>
        <div className="justify-content-center justify-content-md-between text-center d-sm-flex flex-sm-row mt-4 mt-sm-0 col-md-10">
          <div>
            <h1 className="d-md-flex flex-md-row mt-md-3 main-title">OB Catsponses</h1>
          </div>
          <div className="col-md-6 mt-md-3 side-title">
            <p>Customize your HTTP responses with these cool & funny cats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
