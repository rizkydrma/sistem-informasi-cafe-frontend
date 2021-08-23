import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingCart,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function BottomBar() {
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
  return (
    <nav className="footerbar">
      {navButton.map((nav) => (
        <label htmlFor={nav.name} key={nav.id}>
          <input
            type="radio"
            name="group"
            id={nav.name}
            className="nav-input"
          />
          <span className="nav-button">
            <FontAwesomeIcon icon={nav.icon} className="nav-icon" />
            <span className="nav-text">{nav.name}</span>
          </span>
        </label>
      ))}
    </nav>
  );
}
