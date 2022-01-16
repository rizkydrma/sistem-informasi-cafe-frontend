import React, { useEffect } from 'react';
import Navbar from 'components/Navbar';
import Table from 'elements/Table/Table';
import FooterNav from 'components/FooterNav';
import Pagination from 'elements/Pagination/Pagination';
import SkeletonPagination from 'skeletons/SkeletonPagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrders,
  goToNextPage,
  goToPrevPage,
  setPage,
} from 'features/Orders/actions';

import { socket } from 'app/websocket';

export default function ListOrder() {
  const titlePage = 'List Order';
  let dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('auth')).user;
  let orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());

    socket.on(`statusPayment-${user._id}`, (data) => {
      console.log('list order loop');
      dispatch(fetchOrders());
    });

    return function cleanup() {
      socket.off(`statusPayment-${user._id}`, (data) => {
        console.log('socket off');
      });
    };
  }, [dispatch, orders.currentPage, user._id]);
  return (
    <main>
      <Navbar title={titlePage} />
      <div className="d-flex content-space-between mb-20 mx-20">
        <h4 className="display-4">Pesanan Anda : {orders.totalItems}</h4>
        <h4 className="display-4">{user.full_name}</h4>
      </div>
      {orders && <Table items={orders.data} status={orders.status} />}
      <div
        className="d-flex content-center"
        style={{ marginTop: 10, marginBottom: 80 }}
      >
        {orders.status === 'success' && (
          <Pagination
            totalItems={orders.totalItems}
            page={orders.currentPage}
            perPage={orders.perPage}
            onChange={(page) => dispatch(setPage(page))}
            onNext={(_) => dispatch(goToNextPage())}
            onPrev={(_) => dispatch(goToPrevPage())}
          />
        )}

        {orders.status === 'process' && <SkeletonPagination theme="dark" />}
      </div>
      <FooterNav />
    </main>
  );
}
