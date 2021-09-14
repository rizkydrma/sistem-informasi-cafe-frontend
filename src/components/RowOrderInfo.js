import React from 'react';
import { numberWithCommas } from 'utils/utility';

export default function RowOrderInfo({ carts }) {
  return (
    <tr>
      <td>
        <span className="display-5">{carts.name}</span>
        <br />
        {carts.variant && (
          <span className="display-6 color-shadow-text">{carts.variant}</span>
        )}
      </td>
      <td>
        <span className="display-5">{carts.qty}</span>
      </td>
      <td>
        <span className="display-5">{numberWithCommas(carts.price)}</span>
      </td>
      <td>
        <span className="display-5 color-primary">
          {numberWithCommas(carts.qty * carts.price)}
        </span>
      </td>
    </tr>
  );
}
