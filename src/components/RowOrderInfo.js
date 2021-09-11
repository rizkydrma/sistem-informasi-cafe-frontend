import React from 'react';
import { numberWithCommas } from 'utils/utility';

export default function RowOrderInfo({ cart }) {
  return (
    <tr>
      <td>
        <span className="display-5">{cart.name}</span>
      </td>
      <td>
        <span className="display-5">{cart.qty}</span>
      </td>
      <td>
        <span className="display-5">{numberWithCommas(cart.price)}</span>
      </td>
      <td>
        <span className="display-5 color-primary">
          {numberWithCommas(cart.qty * cart.price)}
        </span>
      </td>
    </tr>
  );
}
