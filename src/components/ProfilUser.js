import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { formatRupiah } from 'utils/utility';

import QRCode from 'qrcode';

export default function ProfilUser({ user, order, onLogout }) {
  const history = useHistory();
  const [src, setSrc] = useState('');
  const [show, setShow] = useState(false);
  const [orders, setOrders] = React.useState({
    allOrders: 0,
    totalAllOrders: 0,
    waitingPayment: 0,
    totalWaitingPayment: 0,
    donePayment: 0,
    totalDonePayment: 0,
  });

  QRCode.toDataURL(user._id).then((data) => {
    setSrc(data);
  });

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false);
    }
  };
  const handleSetOrders = React.useCallback(() => {
    if (order.data.length > 0) {
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
      let totalWaitingPayment = 0;
      if (waitingPayment.length > 0) {
        totalWaitingPayment = waitingPayment
          .map((order) => {
            return order.order_items.reduce(
              (acc, curr) => acc + curr.price * curr.qty,
              0,
            );
          })
          .reduce((acc, curr) => acc + curr);
      }

      let donePayment = order.data.filter(
        (order) => order.status_payment === 'done',
      );
      let totalDonePayment = 0;
      if (donePayment.length < 1) {
        totalDonePayment = 0;
      } else {
        totalDonePayment = donePayment
          .map((order) => {
            return order.order_items.reduce(
              (acc, curr) => acc + curr.price * curr.qty,
              0,
            );
          })
          .reduce((acc, curr) => acc + curr);
      }

      setOrders({
        allOrders: order.count,
        totalAllOrders: totalAllOrders + totalAllOrders * 0.1,
        waitingPayment: waitingPayment.length,
        totalWaitingPayment: totalWaitingPayment + totalWaitingPayment * 0.1,
        donePayment: donePayment.length,
        totalDonePayment: totalDonePayment + totalDonePayment * 0.1,
      });
    } else {
      setOrders({
        allOrders: order.count,
        totalAllOrders: 0,
        waitingPayment: 0,
        totalWaitingPayment: 0,
        donePayment: 0,
        totalDonePayment: 0,
      });
    }
  }, [order]);

  React.useEffect(() => {
    handleSetOrders();
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      setShow(false);
    };
  }, [handleSetOrders]);

  return (
    <>
      <section className="profil-user mt-100">
        <div className="icon-user">
          <img
            src={src}
            width={90}
            alt="qrcode"
            onClick={() => setShow(true)}
          />
          <div className="info-user">
            <div className="user-name display-4">{user.full_name}</div>
            <div className="user-email display-5 color-shadow-text">
              {user.email}
            </div>
          </div>
        </div>
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

        <div
          className="mini-card mt-10 change"
          onClick={() => history.push(`/changeProfil`)}
        >
          <span>Ubah Profil</span>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </div>

        <div className="mini-card mt-10 logout" onClick={() => onLogout()}>
          <span>Logout</span>
          <FontAwesomeIcon icon={faPowerOff} />
        </div>
      </section>
      <div
        className={`modal ${show ? 'enter-done' : ''}`}
        onClick={() => setShow(false)}
      >
        <div className="modal-fullsize" onClick={(e) => e.stopPropagation()}>
          <img src={src} alt="qrcodeBig" width="300" />
        </div>
      </div>
    </>
  );
}

ProfilUser.propTypes = {
  user: propTypes.object,
  order: propTypes.object,
  onLogout: propTypes.func,
};
