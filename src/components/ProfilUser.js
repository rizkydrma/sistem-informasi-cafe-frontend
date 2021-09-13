import React from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { formatRupiah } from 'utils/utility';

export default function ProfilUser({ user, order, onLogout }) {
  const [orders, setOrders] = React.useState({
    allOrders: 0,
    totalAllOrders: 0,
    waitingPayment: 0,
    totalWaitingPayment: 0,
    donePayment: 0,
    totalDonePayment: 0,
  });

  const handleSetOrders = React.useCallback(() => {
    let totalAllOrders = order.data
      .map((order) => {
        return order.order_items.reduce(
          (acc, curr) => acc + curr.price * curr.qty,
          0,
        );
      })
      .reduce((acc, curr) => acc + curr);
    let waitingPayment = order.data.filter(
      (order) => order.status_payment !== 'done',
    );
    let totalWaitingPayment = waitingPayment
      .map((order) => {
        return order.order_items.reduce(
          (acc, curr) => acc + curr.price * curr.qty,
          0,
        );
      })
      .reduce((acc, curr) => acc + curr);

    let donePayment = order.data.filter(
      (order) => order.status_payment === 'done',
    );
    let totalDonePayment = donePayment
      .map((order) => {
        return order.order_items.reduce(
          (acc, curr) => acc + curr.price * curr.qty,
          0,
        );
      })
      .reduce((acc, curr) => acc + curr);

    setOrders({
      allOrders: order.count,
      totalAllOrders,
      waitingPayment: waitingPayment.length,
      totalWaitingPayment,
      donePayment: donePayment.length,
      totalDonePayment,
    });
  }, [order]);

  React.useEffect(() => {
    handleSetOrders();
  }, [handleSetOrders]);

  return (
    <section className="mt-100">
      <div className="icon-user">
        <FontAwesomeIcon icon={faIdCard} className="display-1" />
        <div className="info-user">
          <div className="user-name display-4">{user.full_name}</div>
          <div className="user-email display-5 color-shadow-text">
            {user.email}
          </div>
        </div>
      </div>

      {/* <div className="detail-info-user d-flex content-space-between border-btm">
        <div>
          <h5 className="display-6 mb-10 mt-10">Pesanan</h5>
          <h5 className="display-6 mb-10">Menunggu Pembayaran</h5>
          <h5 className="display-6 mb-10">Sudah Dibayar</h5>
        </div>
        <div>
          <h5 className="display-6 mb-10 mt-10">{orders.allOrders}</h5>
          <h5 className="display-6 mb-10">{orders.waitingPayment}</h5>
          <h5 className="display-6 mb-10">{orders.donePayment}</h5>
        </div>
        <div>
          <h5 className="display-6 mb-10 mt-10">
            {formatRupiah(orders.totalAllOrders)}
          </h5>
          <h5 className="display-6 mb-10">
            {formatRupiah(orders.totalWaitingPayment)}
          </h5>
          <h5 className="display-6 mb-10">
            {formatRupiah(orders.totalDonePayment)}
          </h5>
        </div>
      </div> */}
      <div>
        <div className="mini-card mt-10">
          <div className="d-flex flex-column">
            <span className="display-5">Total Pesanan</span>
            <span className="display-6 color-shadow-text">
              {orders.allOrders} Pesanan
            </span>
          </div>
          <span className="color-primary">
            {formatRupiah(orders.totalAllOrders)}
          </span>
        </div>
        <div className="mini-card mt-10">
          <div className="d-flex flex-column">
            <span className="display-5">Menunggu Pembayaran</span>
            <span className="display-6 color-shadow-text">
              {orders.waitingPayment} Pesanan
            </span>
          </div>
          <span className="color-primary">
            {formatRupiah(orders.totalWaitingPayment)}
          </span>
        </div>
        <div className="mini-card mt-10">
          <div className="d-flex flex-column">
            <span className="display-5">Selesai Pembayaran</span>
            <span className="display-6 color-shadow-text">
              {orders.donePayment} Pesanan
            </span>
          </div>
          <span className="color-primary">
            {formatRupiah(orders.totalDonePayment)}
          </span>
        </div>
      </div>

      <div className="mini-card mt-10 logout" onClick={() => onLogout()}>
        <span>Logout</span>
        <FontAwesomeIcon icon={faPowerOff} />
      </div>
    </section>
  );
}

ProfilUser.propTypes = {
  user: propTypes.object,
  order: propTypes.object,
  onLogout: propTypes.func,
};
