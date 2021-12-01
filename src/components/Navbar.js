import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingCart,
  faHeart,
  faUser,
  faBars,
  faChevronLeft,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

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
    name: 'Orders',
    icon: faThList,
    href: '/list-order',
  },
  {
    id: 4,
    name: 'Profil',
    icon: faUser,
    href: '/profil',
  },
];
export default function Navbar(props) {
  const [back, setBack] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [drawer, setDrawer] = useState(true);

  useEffect(() => {
    location.pathname !== '/' ? setBack(true) : setBack(false);
  }, [location]);

  const handleDrawer = () => {
    const footerNav = document.querySelector('nav.footerbar');
    drawer
      ? (footerNav.style.transform = 'translateY(65px)')
      : (footerNav.style.transform = 'translateY(0px)');
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
          onClick={() => history.goBack()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
      </div>

      <ul className="navbar-nav">
        {navButton.map((nav) => (
          <li className="nav-item" key={nav.id}>
            <Button className="nav-link" type="link" to={nav.href}>
              <FontAwesomeIcon className="nav-icon" icon={nav.icon} />
              {nav.name}
            </Button>
          </li>
        ))}
      </ul>

      <h5 className="display-4 title_page">{props.title}</h5>

      <div className="notification">
        {location.pathname !== '/cart' ? (
          <Button className="btn" to="/cart" type="link">
            <FontAwesomeIcon className="nav-icon" icon={faShoppingCart} />
          </Button>
        ) : (
          <Button className="btn" to="/liked" type="link">
            <FontAwesomeIcon className="nav-icon" icon={faHeart} />
          </Button>
        )}
      </div>
    </nav>
  );
}
