import React from 'react';

export default function BottomBar() {
  return (
    <nav className="footerbar">
      <label htmlFor="home">
        <input type="radio" name="group" id="home" className="nav-input" />
        <span className="nav-button">
          <i className="nav-icon fa fa-home"></i>
          <span className="nav-text">Home</span>
        </span>
      </label>
      <label htmlFor="cart">
        <input type="radio" name="group" id="cart" className="nav-input" />
        <span className="nav-button">
          <i className="nav-icon fa fa-shopping-cart"></i>
          <span className="nav-text">Cart</span>
        </span>
      </label>
      <label htmlFor="love">
        <input type="radio" name="group" id="love" className="nav-input" />
        <span className="nav-button">
          <i className="nav-icon fa fa-heart"></i>
          <span className="nav-text">Loves</span>
        </span>
      </label>
      <label htmlFor="profil">
        <input type="radio" name="group" id="profil" className="nav-input" />
        <span className="nav-button">
          <i className="nav-icon fa fa-user"></i>
          <span className="nav-text">Profil</span>
        </span>
      </label>
    </nav>
  );
}
