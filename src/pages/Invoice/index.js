import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoicesByOrderId } from 'api/invoices';
import RowOrderInfo from 'components/RowOrderInfo';

import Navbar from 'components/Navbar';
import { getOneOrder } from 'api/order';
import { formatRupiah, formatDate } from 'utils/utility';
import QRCode from 'qrcode';

import { socket } from 'app/websocket';

const statusPayment = {
  waiting_payment: 'waiting',
  done: 'done',
};

export default function InvoicePage() {
  const titlePage = 'Invoice';
  const [products, setProducts] = React.useState({});
  const [cart, setCart] = React.useState();
  const { order_id } = useParams();
  const [src, setSrc] = React.useState('');

  const user = JSON.parse(localStorage.getItem('auth')).user;

  const fetchOrder = React.useCallback(async (id) => {
    let { data } = await getOneOrder(id);
    if (data.error) {
      return;
    }
    setCart(data);
    return;
  }, []);

  const fetchProduct = React.useCallback(async () => {
    let { data } = await getInvoicesByOrderId(order_id);

    if (data.error) {
      return;
    }
    setProducts(data);
    fetchOrder(data.order._id);
    QRCode.toDataURL(data.order._id).then((data) => {
      setSrc(data);
    });
    return;
  }, [order_id, fetchOrder]);

  React.useEffect(() => {
    fetchProduct();
    socket.on(`statusPayment-${user._id}`, (data) => {
      console.log('invoice loop');
      fetchProduct();
    });

    return function cleanup() {
      socket.off(`statusPayment-${user._id}`, (data) => {
        console.log('socket off status payment');
      });
    };
  }, [fetchProduct, user._id]);
  return (
    <>
      <Navbar title={titlePage} />
      <div className="invoice-page">
        {Object.keys(products).length !== 0 && (
          <div className="invoice-page-item">
            <div className="rectangle-inner"></div>
            <div className="top-style-1">
              <h3 className="display-2">Invoice</h3>
              <h5 className="display-5 color-shadow-text">
                Order No #{products.order.order_number}
              </h5>
            </div>
            <div className="card card-style-1 mt-40 mb-10">
              <div className="d-flex content-space-between px-10">
                <div>
                  <h4 className="display-4 mb-10">Invoice For</h4>
                  <h4 className="display-3 color-primary mb-20">
                    {products.user.full_name}
                  </h4>
                  <h5 className="display-5 color-shadow-text mb-10">
                    table number
                  </h5>
                  <h4 className="display-4 mb-20 color-primary">
                    {products.order.notable}
                  </h4>
                  <h5 className="display-5 color-shadow-text mb-10">
                    Payment Status
                  </h5>
                  <h4 className="display-5 mb-20 color-primary">
                    {statusPayment[products.order.status_payment]}
                  </h4>
                </div>
                <div>
                  <h4 className="display-4 mb-20">Total Amount</h4>
                  <h3 className="display-4 color-primary mb-10">
                    {formatRupiah(products.total)}
                  </h3>
                  <span className="display-5 d-flex mb-10">
                    <div className="circle bg-red"></div>
                    <span className="display-5 color-shadow-text">
                      {formatDate(products.createdAt)}
                    </span>
                  </span>
                  <img src={src} width={90} alt="qrcode" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="invoice-page-item">
          <h4 className="display-4 text-center">Order Detail</h4>
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
              {cart &&
                cart.order_items.map((cart) => (
                  <RowOrderInfo carts={cart} key={cart._id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
