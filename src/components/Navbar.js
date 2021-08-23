import React, { useState } from 'react';
import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <nav className="navbar">
      <div className="navbar-expand">
        <Button type="link" href="/" className="brand">
          <BrandLogo color="white" size="small" />
        </Button>
        <Button className="navbar-toggler" onClick={() => handleDrawer()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </Button>
      </div>

      <ul className={`navbar-nav ${drawer ? 'collapse' : ''}`}>
        <li className="nav-item">
          <Button className="nav-link" type="link" href="#">
            <i className="nav-icon fa fa-home"></i>
            Home
          </Button>
        </li>
        <li className="nav-item">
          <Button className="nav-link" type="link" href="#">
            <i className="nav-icon fa fa-shopping-cart"></i>
            Cart
          </Button>
        </li>
        <li className="nav-item">
          <Button className="nav-link" type="link" href="#">
            <i className="nav-icon fa fa-heart"></i>
            Liked
          </Button>
        </li>
        <li className="nav-item">
          <Button className="nav-link" type="link" href="#">
            <i className="nav-icon fa fa-user"></i>
            Profil
          </Button>
        </li>
      </ul>
      <div className="notification">
        <Button type="link" href="#">
          <i className="nav-icon fa fa-bell"></i>
        </Button>
      </div>
    </nav>
  );
}
