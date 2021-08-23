import React, { useState } from 'react';
import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingCart,
  faHeart,
  faUser,
  faBell,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const navButton = [
    {
      id: 1,
      name: 'Home',
      icon: faHome,
    },
    {
      id: 2,
      name: 'Cart',
      icon: faShoppingCart,
    },
    {
      id: 3,
      name: 'Liked',
      icon: faHeart,
    },
    {
      id: 4,
      name: 'Profil',
      icon: faUser,
    },
  ];

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
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>

      <ul className={`navbar-nav ${drawer ? 'collapse' : ''}`}>
        {navButton.map((nav) => (
          <li className="nav-item" key={nav.id}>
            <Button className="nav-link" type="link" href="#">
              <FontAwesomeIcon className="nav-icon" icon={nav.icon} />
              {nav.name}
            </Button>
          </li>
        ))}
      </ul>
      <div className="notification">
        <Button type="link" href="#">
          <FontAwesomeIcon className="nav-icon" icon={faBell} />
        </Button>
      </div>
    </nav>
  );
}
