import React from 'react';
import propTypes from 'prop-types';
import LogoWhite from 'assets/images/logo_rosid_white.png';
import LogoRed from 'assets/images/logo_rosid_red.png';
import './BrandLogo.scss';

export default function BrandLogo({ color, size }) {
  const classes = [color, size];

  return (
    <div className={`brand_logo ${classes.join(' ')}`}>
      <figure className={`brand_image ${classes.join(' ')}`}>
        <img
          src={color === 'white' ? LogoWhite : LogoRed}
          alt="logo rosid warna putih"
          className="img-cover"
        />
      </figure>
      <span className={`brand_name ${classes.join(' ')}`}>StudioRosid</span>
    </div>
  );
}

BrandLogo.propTypes = {
  color: propTypes.string,
  size: propTypes.string,
};
