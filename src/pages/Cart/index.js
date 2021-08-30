import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';
import Counter from 'elements/Counter/Counter';
import Button from 'elements/Button/Button';
import SkeletonOrderItem from 'skeletons/SkeletonOrderItem';
import SkeletonFooter from 'skeletons/SkeletonFooter';

export default function ShoppingCartPage() {
  const titlePage = 'Shopping Cart';
  const [products, setProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(true);
    }, 6000);
  }, [products]);

  return (
    <>
      <Navbar title={titlePage} />
      <div className="info-order shopping-cart-page">
        <div className="info-order-item">
          <div className="footerbar-detail-product footerbar-detail-product-desk">
            {products && (
              <>
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
              </>
            )}

            {!products && <SkeletonFooter theme="dark" />}
          </div>
        </div>
        <div className="info-order-item info-order-item-cart">
          {products && (
            <table className="shopping-cart">
              <tbody>
                <tr>
                  <td>
                    <figure className="image-wrapper">
                      <img src={ImageCoffee} alt="kopi" className="img-cover" />
                    </figure>
                  </td>
                  <td>
                    <h4 className="display-4">Cappucino</h4>
                    <span className="display-5 color-shadow-text">
                      Signature
                    </span>
                    <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="icon-close mb-20"
                    />
                    <Counter number="1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <figure className="image-wrapper">
                      <img src={ImageCoffee} alt="kopi" className="img-cover" />
                    </figure>
                  </td>
                  <td>
                    <h4 className="display-4">Cappucino</h4>
                    <span className="display-5 color-shadow-text">
                      Signature
                    </span>
                    <h5 className="display-4 mt-10 color-primary">Rp.18K</h5>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="icon-close mb-20"
                    />
                    <Counter number="1" />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {!products &&
            [1, 2, 3, 4].map((data, i) => (
              <SkeletonOrderItem theme="dark" key={i} />
            ))}
        </div>
      </div>
      <div className="footerbar footerbar-detail-product ">
        {products && (
          <>
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
          </>
        )}
        {!products && <SkeletonFooter theme="dark" />}
      </div>
    </>
  );
}
