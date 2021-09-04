import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faHeart,
  faUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'elements/Button/Button';
const navButton = [
  {
    id: 1,
    name: 'Home',
    icon: faHome,
    href: '/',
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
  const [active, setActive] = useState('Home');

  return (
    <nav className="footerbar">
      <ul className="footer-nav">
        {navButton.map((nav) => (
          <li
            className={`nav-item ${active === nav.name ? 'active' : ''}`}
            key={nav.id}
          >
            <Button
              className="btn nav-button"
              type="link"
              href={nav.href}
              onClick={(_) => setActive(nav.name)}
            >
              <FontAwesomeIcon icon={nav.icon} className="nav-icon" />
            </Button>
            <span className="nav-text">{nav.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
