import React from "react";
import './header.css';
import image from '../../assests/logo.png';

const Header = () => {
  return (
    <div class="card">
      <div className="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-12">
            1 of 2
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-12 mt-3">
            <span className="title">
              <img src={image} alt="" width="30" height="24" class="header-logo" />
              VRIO Digital
            </span>

          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-12">
            2 of 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
