import Navbar from 'components/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';

import SkeletonOrderItem from 'skeletons/SkeletonOrderItem';
import SkeletonFooter from 'skeletons/SkeletonFooter';
import RowCartProduct from 'components/RowCartProduct';
import FooterDetailProduct from 'components/FooterDetailProduct';

import { sumPrice } from 'utils/utility';

export default function Cart() {
  const titlePage = 'Shopping Cart';
  let carts = useSelector((state) => state.cart);

  let subTotal = sumPrice(carts);

  return (
    <>
      <Navbar title={titlePage} />
      <div className="info-order shopping-cart-page">
        <div className="info-order-item">
          <div className="footerbar-detail-product footerbar-detail-product-desk">
            {carts && <FooterDetailProduct subTotal={subTotal} />}

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
        {carts && <FooterDetailProduct subTotal={subTotal} />}
        {!carts && <SkeletonFooter theme="dark" />}
      </div>
    </>
  );
}
