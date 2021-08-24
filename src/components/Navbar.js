import React, { useEffect, useState } from 'react';
import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import { Redirect, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingCart,
  faHeart,
  faUser,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

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
export default function Navbar(props) {
  const [drawer, setDrawer] = useState(false);
  const [back, setBack] = useState(false);
  const location = useLocation();
  const referer = location.state && location.state.referer;
  useEffect(() => {
    location.pathname !== '/home' ? setBack(true) : setBack(false);
  }, [location]);

  const handlePreviousPage = () => {
    return <Redirect to={referer} />;
  };

  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <nav className="navbar">
      <div className="navbar-expand">
        <Button type="link" href="/" className="brand">
          <BrandLogo color="white" size="small" />
        </Button>
        <Button
          className={`navbar-toggler ${!back ? 'visible' : 'not-visible'}`}
          onClick={() => handleDrawer()}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          className={`navbar-toggler ${back ? 'visible' : 'not-visible'}`}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePreviousPage()}
          />
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

      <h5 className="display-4 title_page">{props.title}</h5>

      <div className="notification">
        <Button type="link" href="#">
          <FontAwesomeIcon className="nav-icon" icon={faShoppingCart} />
        </Button>
      </div>
    </nav>
  );
}
