import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHeart,
  faUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
const navButton = [
  {
    id: 1,
    name: 'Home',
    icon: faHome,
    href: '/home',
  },
  {
    id: 2,
    name: 'Liked',
    icon: faHeart,
    href: '/liked',
  },
  {
    id: 3,
    name: 'Notification',
    icon: faBell,
    href: '/notification',
  },
  {
    id: 4,
    name: 'Profil',
    icon: faUser,
    href: '/profil',
  },
];
export default function BottomBar() {
  const [active, setActive] = useState('/home');
  const location = useLocation();

  const handleChange = (nav) => {
    setActive(nav);
  };

  return (
    <nav className="footerbar">
      {navButton.map((nav) => (
        <label htmlFor={nav.name} key={nav.id}>
          <input
            type="radio"
            name="group"
            id={nav.name}
            className="nav-input"
            defaultChecked={active === location.pathname ? true : false}
            onChange={() => handleChange(nav.href)}
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
