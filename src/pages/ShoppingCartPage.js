import Navbar from 'components/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';
import Counter from 'elements/Counter/Counter';
import Button from 'elements/Button/Button';

export default function ShoppingCartPage() {
  const titlePage = 'Shopping Cart';
  return (
    <>
      <Navbar title={titlePage} />
      <div className="product_cart">
        <div className="container mt-60">
          <div className="row ">
            <div className="col-xs-4 cart-item">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="col-xs-4 cart-item">
              <h4 className="display-4 mb-10">Cappucino</h4>
              <span className="display-5 mb-10 color-shadow-text">
                Signature
              </span>
              <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
            </div>
            <div className="col-xs-4 cart-item">
              <FontAwesomeIcon icon={faTimes} className="icon-close" />
              <Counter number="1" />
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-4 cart-item">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="col-xs-4 cart-item">
              <h4 className="display-4 mb-10">Cappucino</h4>
              <span className="display-5 mb-10 color-shadow-text">
                Signature
              </span>
              <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
            </div>
            <div className="col-xs-4 cart-item">
              <FontAwesomeIcon icon={faTimes} className="icon-close" />
              <Counter number="1" />
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-4 cart-item">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="col-xs-4 cart-item">
              <h4 className="display-4 mb-10">Cappucino</h4>
              <span className="display-5 mb-10 color-shadow-text">
                Signature
              </span>
              <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
            </div>
            <div className="col-xs-4 cart-item">
              <FontAwesomeIcon icon={faTimes} className="icon-close" />
              <Counter number="1" />
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-4 cart-item">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="col-xs-4 cart-item">
              <h4 className="display-4 mb-10">Cappucino</h4>
              <span className="display-5 mb-10 color-shadow-text">
                Signature
              </span>
              <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
            </div>
            <div className="col-xs-4 cart-item">
              <FontAwesomeIcon icon={faTimes} className="icon-close" />
              <Counter number="1" />
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-4 cart-item">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="col-xs-4 cart-item">
              <h4 className="display-4 mb-10">Cappucino</h4>
              <span className="display-5 mb-10 color-shadow-text">
                Signature
              </span>
              <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
            </div>
            <div className="col-xs-4 cart-item">
              <FontAwesomeIcon icon={faTimes} className="icon-close" />
              <Counter number="1" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerbar footerbar-detail-product">
        <div className="sub-total">
          <h5 className="display-5">Subtotal</h5>
          <h3 className="display-4">Rp. 101K</h3>
        </div>
        <div className="sub-total">
          <h5 className="display-5">Tax (10%)</h5>
          <h3 className="display-4">Rp. 10.1K</h3>
        </div>
        <div className="sub-total">
          <h5 className="display-5">Grand Total</h5>
          <h3 className="display-4">Rp. 111.1K</h3>
        </div>
        <Button
          isLarge
          type="link"
          href="#"
          hasShadow
          className="btn btn-primary d-block"
        >
          Procced To Order
        </Button>
      </div>
    </>
  );
}
