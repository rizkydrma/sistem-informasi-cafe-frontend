import React from 'react';

export default function RowOrderInfo({ cart }) {
  return (
    <tr>
      <td>
        <span className="display-5">{cart.name}</span>
        <br />
        {cart.variant && (
          <span className="display-5 color-shadow-text">{cart.variant}</span>
        )}
      </td>
      <td>
        <span className="display-5">{cart.qty}</span>
      </td>
      <td>
        <span className="display-5">{cart.price}</span>
      </td>
      <td>
        <span className="display-5 color-primary">{cart.qty * cart.price}</span>
      </td>
    </tr>
  );
}
