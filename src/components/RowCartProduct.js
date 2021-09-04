import React from 'react';
import Counter from 'elements/Counter/Counter';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from 'features/Cart/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { config } from 'config';
import { compactNumber } from 'utils/utility';
import Button from 'elements/Button/Button';

export default function RowCartProduct({ cart }) {
  let dispatch = useDispatch();
  return (
    <tr key={cart._id}>
      <td>
        <figure className="image-wrapper">
          <img
            src={`${config.api_host}/upload/${cart.image_url}`}
            alt="kopi"
            className="img-cover"
          />
        </figure>
      </td>
      <td>
        <h4 className="display-4">{cart.name}</h4>
        {cart.variant && (
          <span className="display-5 color-shadow-text">{cart.variant}</span>
        )}

        <h5 className="display-4 mt-10 color-primary">
          Rp.{compactNumber(cart.price)}
        </h5>
      </td>
      <td>
        <Button className="btn" onClick={(_) => dispatch(deleteItem(cart))}>
          <FontAwesomeIcon icon={faTimes} className="icon-close mb-20" />
        </Button>
        <Counter
          cartItems={cart}
          onIncrement={(cart) => dispatch(addItem(cart))}
          qty={cart.qty}
          onDecrement={(cart) => dispatch(removeItem(cart))}
        />
      </td>
    </tr>
  );
}
