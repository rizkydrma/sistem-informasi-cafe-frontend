import Navbar from 'components/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from 'elements/Button/Button';
import SkeletonOrderItem from 'skeletons/SkeletonOrderItem';
import SkeletonFooter from 'skeletons/SkeletonFooter';
import RowCartProduct from 'components/RowCartProduct';

export default function Cart() {
  const titlePage = 'Shopping Cart';
  let carts = useSelector((state) => state.cart);

  return (
    <>
      <Navbar title={titlePage} />
      <div className="info-order shopping-cart-page">
        <div className="info-order-item">
          <div className="footerbar-detail-product footerbar-detail-product-desk">
            {carts && (
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

            {!carts && <SkeletonFooter theme="dark" />}
          </div>
        </div>
        <div className="info-order-item info-order-item-cart">
          {carts && (
            <table className="shopping-cart">
              <tbody>
                {carts.map((cart) => (
                  <RowCartProduct cart={cart} key={cart._id} />
                ))}
              </tbody>
            </table>
          )}

          {!carts &&
            [1, 2, 3, 4].map((data, i) => (
              <SkeletonOrderItem theme="dark" key={i} />
            ))}
        </div>
      </div>
      <div className="footerbar footerbar-detail-product ">
        {carts && (
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
        {!carts && <SkeletonFooter theme="dark" />}
      </div>
    </>
  );
}
