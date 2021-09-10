import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';

import Stepper from 'elements/Stepper/Stepper';
import SkeletonDescription from 'skeletons/SkeletonDescription';
import SkeletonElement from 'skeletons/SkeletonElement';

import RowOrderInfo from 'components/RowOrderInfo';
import FooterDetailProduct from 'components/FooterDetailProduct';

import { getOneOrder } from 'api/order';
import { StatusPayment } from 'elements/StatusPayment/StatusPayment';
import { subTotal } from 'utils/utility';

export default function DetailOrder() {
  const titlePage = 'Order Info';
  const { id } = useParams();
  const [products, setProducts] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const getDataUser = () => {
    return JSON.parse(localStorage.getItem('auth')).user;
  };

  const fetchProduct = React.useCallback(async () => {
    let { data } = await getOneOrder(id);

    if (data.error) {
      return;
    }
    setProducts(data);
  }, [id]);

  useEffect(() => {
    setUserInfo(getDataUser());
    fetchProduct();
  }, [fetchProduct]);

  return (
    <>
      <Navbar title={titlePage} />
      <section className="info-order">
        {products && (
          <>
            <div className="info-order-item">
              <div className="ordering">
                <h5 className="display-5 mb-10 color-shadow-text">
                  Nama Pemesan
                </h5>
                <h3 className="display-3 mb-20">{userInfo.full_name}</h3>
                <h5 className="display-5 mb-10 color-shadow-text">No Table</h5>
                <h3 className="display-3 mb-20">{products.notable}</h3>
              </div>
              <Stepper order={products.status_order} step={4} />
              <div className="footerbar-info-order footbar-info-order-desk mt-20">
                <h3 className="display-5">Grand Total</h3>
                <h2 className="display-4 color-primary">Rp. 111.1K</h2>
              </div>
            </div>
            <div className="info-order-item">
              <table className="order-list">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>
                      <span className="display-5">Order Item</span>
                    </th>
                    <th>
                      <span className="display-5">qty</span>
                    </th>
                    <th>
                      <span className="display-5">price</span>
                    </th>
                    <th>
                      <span className="display-5">total</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.order_items.map((cart) => (
                    <RowOrderInfo cart={cart} key={cart._id} />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {!products && <SkeletonDescription theme="dark" />}
      </section>
      <div className="footerbar footerbar-detail-product">
        {products && (
          <FooterDetailProduct subTotal={subTotal(products.order_items)} />
        )}
        {StatusPayment(products.status_payment)}

        {!products && (
          <div className="skeleton-wrapper dark d-flex w-100">
            <div className="w-30">
              <SkeletonElement type="button" />
            </div>
            <div className="w-70">
              <SkeletonElement type="button" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
