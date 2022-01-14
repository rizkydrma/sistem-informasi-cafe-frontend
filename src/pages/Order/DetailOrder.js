import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import { useParams, useHistory } from 'react-router-dom';

import Stepper from 'elements/Stepper/Stepper';
import SkeletonDescription from 'skeletons/SkeletonDescription';
import SkeletonElement from 'skeletons/SkeletonElement';

import RowOrderInfo from 'components/RowOrderInfo';
import FooterDetailProduct from 'components/FooterDetailProduct';

import { getOneOrder } from 'api/order';
import { StatusPayment } from 'elements/StatusPayment/StatusPayment';
import { subTotal } from 'utils/utility';
import Button from 'elements/Button/Button';

import { socket } from 'app/websocket';

export default function DetailOrder() {
  const titlePage = 'Order Info';
  const { id } = useParams();
  const history = useHistory();
  const [products, setProducts] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const user = JSON.parse(localStorage.getItem('auth')).user;

  const getDataUser = () => {
    return JSON.parse(localStorage.getItem('auth')).user;
  };

  const fetchProduct = React.useCallback(async () => {
    let { data } = await getOneOrder(id);
    if (data.error) {
      return;
    }
    setProducts(data);

    return;
  }, [id]);

  socket.on(`progressOrder-${products._id}`, (data) => {
    setProducts(data.order);
  });

  useEffect(() => {
    setUserInfo(getDataUser());
    fetchProduct();

    socket.on(`statusPayment-${user._id}`, (data) => {
      console.log('detail order loop');
      fetchProduct();
    });

    return () => {
      setProducts(false);
      setUserInfo(null);

      socket.off(`statusPayment-${user._id}`, (data) => {
        console.log('socket off status payment');
      });
    };
  }, [fetchProduct, user._id]);

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
              <div className="footerbar-detail-product footerbar-info-order footbar-info-order-desk mt-20">
                {products && (
                  <FooterDetailProduct
                    subTotal={subTotal(products.order_items)}
                  />
                )}
                <div className="d-flex content-space-between w-100">
                  {StatusPayment(products.status_payment)}
                  <Button
                    isSmall
                    className="btn btn-primary"
                    onClick={() => history.push(`/invoice/${products._id}`)}
                  >
                    Invoice
                  </Button>
                </div>
              </div>
            </div>
            <div className="info-order-item">
              <table className="order-list order-list-invoice">
                <thead>
                  <tr>
                    <th>
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
                  {products &&
                    products.order_items.map((cart) => (
                      <RowOrderInfo carts={cart} key={cart._id} />
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
        <div className="d-flex content-space-between w-100">
          {StatusPayment(products.status_payment)}
          <Button
            isSmall
            className="btn btn-primary"
            onClick={() => history.push(`/invoice/${products._id}`)}
          >
            Invoice
          </Button>
        </div>

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
