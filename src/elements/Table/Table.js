import React from 'react';
import './Table.scss';
import { StatusPayment } from 'elements/StatusPayment/StatusPayment';
import { useHistory } from 'react-router-dom';

import { subTotal } from 'utils/utility';
import Button from 'elements/Button/Button';

export default function Table({ items, status }) {
  const history = useHistory();

  if (status === 'success') {
    return (
      <table className="table-custom">
        <thead>
          <tr>
            <th className="display-5">No</th>
            <th className="display-5">Order</th>
            <th className="display-5">Total</th>
            <th className="display-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                #{item.order_number}
                <br />
                {StatusPayment(item.status_payment)}
              </td>
              <td>
                {item.order_items.map((order, i) => (
                  <div key={i}>
                    <span className="display-5">
                      {order.name} x {order.qty}
                    </span>
                    <br />
                  </div>
                ))}
              </td>
              <td>{subTotal(item.order_items)}</td>
              <td className="text-center">
                <Button
                  className="btn btn-primary"
                  isSmall
                  onClick={() => history.push(`/detailorder/${item._id}`)}
                >
                  Detail
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <span>Loading...</span>;
}
