import React from 'react';
import Navbar from 'components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';

export default function OrderInfoPage() {
  const titlePage = 'Order Info';

  return (
    <>
      <Navbar title={titlePage} />
      <section className="info-order">
        <div className="ordering">
          <h5 className="display-5 mb-10 color-shadow-text">Nama Pemesan</h5>
          <h3 className="display-3 mb-20">Rizky Darma</h3>
          <h5 className="display-5 mb-10 color-shadow-text">No Table</h5>
          <h3 className="display-3 mb-20">23</h3>
          <h5 className="display-5">order is being prepared soon</h5>
        </div>
        <div className="d-flex content-space-between mt-50 mb-10">
          <h4 className="display-4">Order List</h4>
          <FontAwesomeIcon icon={faTasks} />
        </div>
        <div className="order-list">
          <div className="order-list-row">
            <div className="item flex-grow-1">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="item flex-grow-10">
              <div className="order-name">
                <h4 className="display-4">Coffe</h4>
                <h5 className="display-5 color-shadow-text">Signature</h5>
              </div>
            </div>
            <div className="item flex-grow-1">
              <div className="order-amount">
                <h4 className="display-4">3x18K</h4>
              </div>
            </div>
          </div>
          <div className="order-list-row">
            <div className="item flex-grow-1">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="item flex-grow-10">
              <div className="order-name">
                <h4 className="display-4">Coffe</h4>
                <h5 className="display-5 color-shadow-text">Signature</h5>
              </div>
            </div>
            <div className="item flex-grow-1">
              <div className="order-amount">
                <h4 className="display-4">3x18K</h4>
              </div>
            </div>
          </div>
          <div className="order-list-row">
            <div className="item flex-grow-1">
              <figure className="image-wrapper">
                <img src={ImageCoffee} alt="kopi" className="img-cover" />
              </figure>
            </div>
            <div className="item flex-grow-10">
              <div className="order-name">
                <h4 className="display-4">Coffe</h4>
                <h5 className="display-5 color-shadow-text">Signature</h5>
              </div>
            </div>
            <div className="item flex-grow-1">
              <div className="order-amount">
                <h4 className="display-4">3x18K</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footerbar footerbar-order-info">
        <h3 className="display-4">Grand Total</h3>
        <h2 className="display-3 color-primary">Rp. 111.1K</h2>
      </div>
    </>
  );
}
